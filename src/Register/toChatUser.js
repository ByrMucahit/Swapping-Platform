const uyeOlBtn = document.getElementById('uyeOlBtn');
var email = document.getElementById("email");
var userName = document.getElementById("userName");

var userChat = {name: userName, email: email, userPhoto: '' }
uyeOlBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    
    const db = firebase.Database().ref('chatUsers').child(userChat, function(error){
        alert(error);
    });


    db.push()
    

})
