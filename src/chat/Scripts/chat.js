var currentUserKey = '';
var chatKey = '';
 var userProfile = { email: '', name: '', photoURL: '' };

function onKeyDown(){
    document.addEventListener('keydown', function (key) {
        if (key.which === 13) {
            SendMessage();
        }
    });
}


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
                chatKey = data.key;
            }

        });
        if (flag === false) {

            chatKey = firebase.database().ref('friend_list').push(friendList, function (error) {
                if (error) alert(error);
                else {
                    //console.log("Hello World");

                    document.getElementById('chatPanel').removeAttribute('style');
                    document.getElementById('divStart').setAttribute('style', 'display:none');
                    hideChatList();

                }

            }).getKey();

        }
        else {
            document.getElementById('chatPanel').removeAttribute('style');
            document.getElementById('divStart').setAttribute('style', 'display:none');
            hideChatList();

        }


        ///////////////////////////
        ///Display friend name and photo
        document.getElementById('divChatName').innerHTML = friendName;
        document.getElementById('imgChat').src = friendPhoto;


        document.getElementById('messages').innerHTML = '' ;

        onKeyDown();
        document.getElementById('txtMessage').value = '';
        document.getElementById('txtMessage').focus;

        ///////////////////////////
        ///Display Chat Messages
        LoadChatMessages(chatKey);

    });






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
            
            firebase.database().ref('friend_list').child(chat.userId);
            
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
            }
        
    
        });
        document.getElementById('messages').innerHTML = messageDisplay;
        document.getElementById('txtMessage').value = '';
        document.getElementById('txtMessage').focus();
        document.getElementById('txtMessage').scrollTo(0, document.getElementById('txtMessage').clientHeight);
    })
}

function hideChatList() {
    document.getElementById('side-1').classList.add('d-none', 'd-md-block');
    document.getElementById('side-2').classList.remove('d-none');
}


function showChatsList() {
    document.getElementById('side-1').classList.remove('d-none', 'd-md-block');
    document.getElementById('side-2').classList.add('d-none');

}

function LoadChatList(){
    var db = firebase.database().ref("friend_list");
    db.on('value',function(lists){
        document.getElementById('lstChat').innerHTML = `<li class = "list-group-item style="background-color: #f8f8f8;">
                                                            <input type = "text" placeholder = "Ara veya Yeni New Chat Aç" class="form-control form-rounded"
                                                        </li>`
        lists.forEach(function(data){
            var lst = data.val();
            var friendKey = '';
            if(lst.friendId === currentUserKey){
                friendKey = lst.userId;
            }
            else if (lst.userId === currentUserKey){
                friendKey = lst.friendId;
            }
            if(friendKey !==""){

                firebase.database().ref('users').child(friendKey).on('value', function(data){

                    document.getElementById('lstChat').innerHTML += `<li class = "list-group-item list-group-item-action" onclick = "startChat('${data.key}','${data.ürün_sahibi}', '${data.photoURL}')">
                                                                        <div class="row">
                                                                            <div class=col-md-2>
                                                                                <img src="${data.photoURL}}" class="friend-pic rounded-circle"/>
                                                                            </div>
                                                                            <div class="col-md-10" style="cursor:pointer;">
                                                                                <div class="name">${data.name} </div>
                                                                                <div class="under-name">This is some messagetext...</di>
                                                                                </div>
                                                                                </div>
                                                                                </li>
                                                                                ` ;
                })
                
            }

          

        });
    });
}
   


function SendMessage() {
    var chatMessage = {
        userId: currentUserKey,
        msg: document.getElementById('txtMessage').value,
        dateTime: new Date().toLocaleString()
    };

    firebase.database().ref('chatMessages').child(chatKey).push(chatMessage, function(error){
         if (error) alert(error);
         else{
         firebase.database().ref('fcmTokens').child(friendId).once('value').then(function(data){
             $.ajax({
                 url: 'htpps://fcm.googleapis.com/fcm/send',
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                     'Authorization' : 'key=AAAADIAbqlA:APA91bH7eh3IRKyOPUnHujg_iDI-4VG9cSrPCyOTTakN7TEtEkGjPEK-pqRZ_vSHq_Xfq4A46CxzhUkg3XV91ZWDkrjV1NsUUsiDTfFBKKJfF_uvGSHypCd4k4R7qZSIiRaZ1lZTTJGY'

                 },
                 data: JSON.stringify({
                     'to': data.val().token_id, 'data': {'message': chatMessage.msg.substring(0,30) + "..."}
                 }),
                 success: function(response){
                     console.log(response);
                 },
                 error: function(xhr, status, error){
                     console.log(xhr.error);
                 }
             });
         })
         document.getElementById('txtMessage').value = "";
         document.getElementById('txtMessage').focus();

         }
    })
  
}


function PopulateFriendList() {
    document.getElementById('lstFriend').innerHTML = `<div class= 'text-center'>
                                                        <span class="spinner-border text-primary mt-5" style="width: 7rem, height: 7rem"></span>   
                                                      </div>`;

    var db = firebase.database().ref('Index').child('products');
    var lst = ``;
    db.on("value", function (users) {
        if (users.hasChildren()) {

            lst = `<li class="list-group-item" style="background-color: #f8f8f8;">
            <input type="text" placeholder="Ara yada Yeni Chat oluştur..." class="form-control form-rounded"/>
        </li>`;

        }

        users.forEach(function (data) {
            var user = data.val();
            console.log(user.ürün_sahibi);
            if (user.ürün_sahibi !== firebase.auth().currentUser.email) {
                lst += `<li class="list-group-item list-group-item-action" data-dismiss="modal" onclick="startChat('${data.key}','${user.ürün_sahibi}','${user.photoURL}')" >
                <div class="row">
                    <div class="col-md-2" style="margin-left: -10px;">
                        <img src="${user.photoURL}" class="rounded-circle friend-pic"/>
                    </div>
                    <div class="col-md-10 d-none d-md-block" style="cursor:pointer;">
                        <div class="name">${user.ürün_sahibi}</div>
                    </div>
                </div>
            </li>`
            }



        });
        document.getElementById('lstFriend').innerHTML = lst;
    });
}


function onFirebaseStateChanged() {
    firebase.auth().onAuthStateChanged(onStateChanged);
}

function onStateChanged(user) {
    if (user) {
       
        userProfile.email = firebase.auth().currentUser.email;
        userProfile.name = '';
        userProfile.photoURL = '';

        var db = firebase.database().ref('userMessage');
        var flag = false;
        db.on('value', function (users) {
            users.forEach(function (data) {
                var user = data.val();
                if (user.email === userProfile.email) {
                    currentUserKey = data.key;
                    flag = true;

                }
            });
            if (flag == false) {
                firebase.database().ref('userMessage').child('zuhal').push(userProfile, callback);
            }
            else {
                alert(firebase.auth().currentUser.email + '\n' + " It's done");
                //document.getElementById('imgProfile').title = firebase.auth().currentUser.email;

                document.getElementById('lnkNewChat').classList.add();

            }
            const messaging = firebase.messaging();
            messaging.requestPermission().then(function(){
                return messaging.getToken();
            }).then(function(token){
                firebase.database().ref('fcmTokens').child(currentUserKey).set({token_id: token});
            })

            LoadChatList();

        })

        firebase.database().ref('userMessage').child('zuhal').set(userProfile, callback)


    }
    else {
        //alert(firebase.auth().currentUser.email);
        //document.getElementById('imgProfile').title = firebase.auth().currentUser.email;

    }
}

function callback(error) {
    if (error) {
        const code = error.code;
        const message = error.message;
        alert("code:" + code + "\n" + "Error Message" + message);
    } else {
        alert(firebase.auth().currentUser.email);
        //document.getElementById('imgProfile').title = firebase.auth().currentUser.email;
    }

}

/////////
//Call auth State Changed

onFirebaseStateChanged();



/* Button  */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}