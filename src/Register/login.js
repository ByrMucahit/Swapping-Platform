
//EVENT LISTENER
const girisBtn = document.getElementById('girisBtn')
const pname = document.getElementById('profileName');



auth.onAuthStateChanged(function (user) {
    if (user) {
        
        var user = firebase.auth().currentUser;
        if (user != null) {
    
            }

    } else {

    }
}
)

girisBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('Submit is done');

    var email = document.getElementById('loginEmail');
    var password = document.getElementById('loginPassword');

    console.log(email.value + "Welcome to Website");
    auth.signInWithEmailAndPassword(email.value, password.value).then(function(){
        location.replace("index.html");
    }).catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            document.getElementById('cAlert').innerHTML = "Mailiniz yada Şifreniz hatalı";
            console.log("Error Code : "+errorCode+ "Error Message : "+errorMessage);
        }
        else if (errorCode === 'auth/user-not-found') {
            document.getElementById('cAlert').innerHTML = "sitemize kayıtlı böyle bir hesap bulunmamaktadır.";
        }
    });

   
}) 
   




function myFunction() {
    
    location.replace("index.html");
}

