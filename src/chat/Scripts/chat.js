var currentUserKey = '';
var chatKey = '';
 var userProfile = { email: '', name: '', photoURL: '' };
var list = [''];
var i = -1;

document.addEventListener('keydown', function (key) {  
    if (key.which === 13) {
            SendMessage();}});

function startChat(friendKey, friendName, friendPhoto) {
    var friendList = { friendId: friendKey, userId: currentUserKey };
    friendId = friendKey;
    var flag = false;
    var db = firebase.database().ref('friend_list');
    db.on('value', function (friends) {
        friends.forEach(function (data) {
            var user = data.val();
            if ((user.friendId === friendList.friendId && user.userId === friendList.userId) || (user.friendId === friendList.userId && user.userId === friendList.friendId)) {
                flag = true;
                chatKey = data.key; }});
        if (flag === false) {

            chatKey = firebase.database().ref('friend_list').push(friendList, function (error) {
                if (error) alert(error);
                else {
                    //console.log("Hello World");
                    document.getElementById('chatPanel').removeAttribute('style');
                    document.getElementById('divStart').setAttribute('style', 'display:none');
                    hideChatList();}}).getKey();}
        else {
            document.getElementById('chatPanel').removeAttribute('style');
            document.getElementById('divStart').setAttribute('style', 'display:none');
            hideChatList();}
        ///////////////////////////
        ///Display friend name and photo
        document.getElementById('divChatName').innerHTML = friendName;
        document.getElementById('imgChat').src = friendPhoto;
        document.getElementById('messages').innerHTML = '' ;
        document.getElementById('txtMessage').value = '';
        document.getElementById('txtMessage').focus;
        ///////////////////////////
        ///Display Chat Messages
        LoadChatMessages(chatKey, friendPhoto);});
    //hideChatList();
}
//////////////////////////////////////////////
function LoadChatMessages(chatKey, friendPhoto){
    var db = firebase.database().ref('chatMessages').child(chatKey);
    db.on('value', function(chats){
        var messageDisplay= ``;
        chats.forEach(function(data){
            var chat = data.val();
            var dateTime = chat.dateTime.split(" ");
            var sent = false;
            
            firebase.database().ref('friend_list').child(chatKey);
            
            if(chat.userId !== currentUserKey){
               messageDisplay += `<div class= "row">
                                    <div class="col-2 col-sm-1 col-md-1>
                                        <img src="${friendPhoto}" class="chat-pic rounded-circle" />
                                    </div>
                                    <div class="col-6 col-sm-7 col-md-7>
                                        <p class="receive">
                                        ${chat.msg}   
                                            <span class="time float-right" title = "${dateTime[0]}">${dateTime[1]}</span>
                                        <p>
                                    </div>
                                </div>
                                        `;
                                    }
           

            else{
                messageDisplay += `<div class="row justify-content-end">
                <div class="col-6 col-sm-7 col-md-7">
                    <p class="sent  float-right">
                    ${chat.msg}    
                    <span class="time float-right" title = "${dateTime[0]}">${dateTime[1]}</span>
                    </p>
                </div>
                <div class="col-2 col-sm-1 col-md-1">
                    <img src="${userProfile.photoURL}" class="chat-pic rounded-circle"/>
                </div>
            </div>`;
            }});
        document.getElementById('messages').innerHTML = messageDisplay;
        document.getElementById('messages').scrollTo(0, document.getElementById('messages').scrollHeight);})}

function hideChatList() {
    document.getElementById('side-1').classList.add('d-none', 'd-md-block');
    document.getElementById('side-2').classList.remove('d-none');}

function showChatsList() {
    document.getElementById('side-1').classList.remove('d-none', 'd-md-block');
    document.getElementById('side-2').classList.add('d-none');}

function LoadChatList(){
    var db = firebase.database().ref("friend_list");
    db.on('value',function(lists){
        document.getElementById('lstChat').innerHTML = `<li class = "list-group-item style="background-color: #f8f8f8;">
                                                            <input type = "text" placeholder = "Ara veya Yeni New Chat Aç" class="form-control form-rounded"
                                                        </li>`
        lists.forEach(function(data){
            var lst = data.val();
            //console.log("lst's: "+lst.userId)
            var friendKey = '';
            if(lst.friendId === currentUserKey){
                friendKey = lst.userId;
            }
            else if (lst.userId === currentUserKey){
                friendKey = lst.friendId;
            }
            if(friendKey !==""){

                firebase.database().ref('users/chat').child(friendKey).on('value', function(datas){
                        var user = datas.val();
                        //console.log(user)
                        document.getElementById('lstChat').innerHTML += `<li class = "list-group-item list-group-item-action" onclick = "startChat('${datas.key}','${user.name}', '${user.url}')">
                        <div class="row">
                            <div class=col-md-2>
                                <img src="${user.url}" class="friend-pic rounded-circle"/>
                            </div>
                            <div class="col-md-10" style="cursor:pointer;">
                                <div class="name">${user.email} </div>
                                <div class="under-name">This is some messagetext...</di>
                                </div>
                                </div>
                                </li>
                                ` ;   })}});});}
   
function SendMessage() {
    var chatMessage = {
        userId: currentUserKey,
        msg: document.getElementById('txtMessage').value,
        dateTime: new Date().toLocaleString()};

    firebase.database().ref('chatMessages').child(chatKey).push(chatMessage, function(error){
         if (error) alert(error);
         else{
        
         document.getElementById('txtMessage').value = "";
         document.getElementById('txtMessage').focus();}})}

function OnceChecking(check){
    
   for (var i = 0 ; i < list.length; i++){
       if(list[i] === check){
           return 1;}
       else{
           return 0;}}}


function PopulateFriendList() {
    document.getElementById('lstFriend').innerHTML = `<div class= 'text-center'>
                                                        <span class="spinner-border text-primary mt-5" style="width: 7rem, height: 7rem"></span>   
                                                      </div>`;

    var db = firebase.database().ref('users').child('chat');
    var lst = ``;
    db.on("value", function (users) {
        if (users.hasChildren()) {

            lst = `<li class="list-group-item" style="background-color: #f8f8f8;">
            <input type="text" placeholder="Ara yada Yeni Chat oluştur..." class="form-control form-rounded"/>
        </li>`;

        }
        users.forEach(function (data) {
            var user = data.val();
            //console.log(user.name)
            if (user.email !== firebase.auth().currentUser.email) {
                var check = OnceChecking(user.email);
                //console.log(data.key)
                    if(check === 0)
                    {
                        list.push(user.email);
                        lst += `<li class="list-group-item list-group-item-action" data-dismiss="modal" onclick="startChat('${data.key}','${user.email}','${user.url}')" >
                        <div class="row">
                            <div class="col-md-2" style="margin-left: -10px;">
                                <img src="${user.url}" class="rounded-circle friend-pic"/>
                            </div>
                            <div class="col-md-10 d-none d-md-block" style="cursor:pointer;">
                                <div class="name">${user.email}</div>
                            </div>
                        </div>
                    </li>`}}});
        document.getElementById('lstFriend').innerHTML = lst;});}

function onFirebaseStateChanged() {
    firebase.auth().onAuthStateChanged(onStateChanged);}

function onStateChanged(user) {
    if (user) {
       document.getElementById('imgProfile').src = '';
       document.getElementById('pName').innerHTML = firebase.auth().currentUser.email;
        userProfile.email = firebase.auth().currentUser.email;
        userProfile.name = '';
        userProfile.photoURL = '';

        var db = firebase.database().ref('users').child('chat');
        var flag = false;
        db.on('value', function (users) {
            users.forEach(function (data) {
                var user = data.val();
                if (user.email === userProfile.email) {
                    currentUserKey = data.key;
                    flag = true;}});
            if (flag == false) {
                firebase.database().ref('userMessage').child(Date.now()).push(userProfile, callback);}
            else {
                alert(firebase.auth().currentUser.email + '\n' + " It's done");
                //document.getElementById('imgProfile').title = firebase.auth().currentUser.email;
                document.getElementById('lnkNewChat').classList.add();}
            LoadChatList();})}
    else {
        //alert(firebase.auth().currentUser.email);
        //document.getElementById('imgProfile').title = firebase.auth().currentUser.email;
    }}

function callback(error) {
    if (error) {
        const code = error.code;
        const message = error.message;
        alert("code:" + code + "\n" + "Error Message" + message);
    } else {
        alert(firebase.auth().currentUser.email);
        //document.getElementById('imgProfile').title = firebase.auth().currentUser.email;
    }}
/////////
//Call auth State Changed
onFirebaseStateChanged();
/* Button  */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

