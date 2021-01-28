const startChat = document.getElementById('startChat');


startChat.addEventListener('click',function(){
    console.log("Hello World");

    document.getElementById('chatPanel').removeAttribute('style');
    document.getElementById('divStart').setAttribute('style', 'display:none');

    //hideChatList();
})
//////////////////////////////////////////////

const showChatList = document.getElementById('showChatList');

showChatList.addEventListener('click', function(){
    document.getElementById('side-1').classList.remove('d-none', 'd-md-block');
    document.getElementById('side-2').classList.add('d-none');
})

function hideChatList(){
    document.getElementById('side-1').classList.add('d-none', 'd-md-block');
    document.getElementById('side-2').classList.remove('d-none');
}


function showChatsList(){
    document.getElementById('side-1').classList.remove('d-none', 'd-md-block');
    document.getElementById('side-2').classList.add('d-none');

}

function OneKeyDown(){
  document.addEventListener('keydown',function(key){
    if(key.which === 13){
        SendMessage();
    }
  })
}

function SendMessage(){
    var message = `<div class="row justify-content-end">
    <div class="col-6 col-sm-7 col-md-7">
        <p class="sent  float-right">
        ${document.getElementById('txtMessage').value}    
        <span class="time float-right">1:28 PM</span>
        </p>
    </div>
    <div class="col-2 col-sm-1 col-md-1">
        <img src="src/chat/images/pp.png" class="chat-pic"/>
    </div>
</div>`;

document.getElementById('messages').innerHTML += message;
document.getElementById('txtMessage').value = '';
document.getElementById('txtMessage').focus();

document.getElementById('txtMessage').scrollTo(0, document.getElementById('txtMessage').clientHeight );

}


function PopulateFriendList(){
    document.getElementById('lstFriend').innerHTML = `<div class= 'text-center'>
                                                        <span class="spinner-border text-primary mt-5" style="width: 7rem, height: 7rem"></span>   
                                                      </div>`;

    var db = firebase.database().ref('users');
    var lst = ``;
    db.child('zuhal').on("value", function(users){
        if(users.hasChildren()){
            
            lst = `<li class="list-group-item" style="background-color: #f8f8f8;">
            <input type="text" placeholder="Ara yada Yeni Chat oluştur..." class="form-control form-rounded"/>
        </li>`;
        
        }

        users.forEach(function(data){
            var user = data.val();
            lst += `<li class="list-group-item list-group-item-action" type="click" id="startChat" >
            <div class="row">
                <div class="col-md-2" style="margin-left: -10px;">
                    <img src="${user.photoURL}" class="rounded-circle friend-pic"/>
                </div>
                <div class="col-md-10 d-none d-md-block" style="cursor:pointer;">
                    <div class="name">${user.mail}</div>
                </div>
            </div>
        </li>`
            
            
        });
        document.getElementById('lstFriend').innerHTML = lst;
    });
}


function onFirebaseStateChanged(){
    firebase.auth().onAuthStateChanged(onStateChanged);
}

function onStateChanged(user){
    if(user){
        var userProfile = {email:'', name:'', photoURL:''};
        userProfile.email = firebase.auth().currentUser.email;
        userProfile.name = '';
        userProfile.photoURL = '';

        var db = firebase.database().ref('userMessage');
        var flag = false;
        db.on('value', function(users){
            users.forEach(function(data){
                var user = data.val();
                if(user.email === userProfile.email){
                    flag = true;

                }
            });
            if(flag == false){
                firebase.database().ref('userMessage').child('zuhal').push(userProfile, callback);
            }
            else{
                alert(firebase.auth().currentUser.email+'\n'+" It's done");
        //document.getElementById('imgProfile').title = firebase.auth().currentUser.email;
    
            }

        })

        firebase.database().ref('userMessage').child('zuhal').set(userProfile, callback)
  

    }
    else {
        //alert(firebase.auth().currentUser.email);
        //document.getElementById('imgProfile').title = firebase.auth().currentUser.email;

    }
}

function callback(error){
    if(error){
        const code = error.code;
        const message = error.message;
        alert("code:" + code +"\n"+"Error Message"+message);
    }else{
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
  window.onclick = function(event) {
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