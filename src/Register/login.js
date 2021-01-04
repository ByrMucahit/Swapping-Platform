import  profileInfo  from '../ProfilePage/indexInfo.js';

//EVENT LISTENER
const girisBtn = document.getElementById('girisBtn')

// CREATING REFERENCE
const auth = firebase.auth()



auth.onAuthStateChanged(function (user) {
    if (user) {

        var user = firebase.auth().currentUser;
        if (user != null) {
            
            myFunction();
           
            }
        
        
    } else {


    }
}
)
girisBtn.addEventListener('submit', (e) =>{
    console.log('Submit is done');
    e.preventDefault();
    //GETTING VALUE OF EMAIL AND PASSWORD
    var email = document.getElementById("lEmail");
    var password = document.getElementById("lPassword");

    console.log(email.value + "hoşgeldiniz, giriş başarılı")
    auth.signInWithEmailAndPassword(email.value, password.value).then((user) => {
        alert(email.value + " Welcome to website");

        //Redirect page
        myFunction();

        //Displaying Some Event
        document.getElementById('uyeOlBtn').style.display = "none";

    }).catch(function (error) {

        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Error Code' + errorCode+ "Error Message :"+errorMessage);
        if (errorCode === 'auth/wrong-password') {
            document.querySelector('.cAlert').innerHTML = "Mailiniz yada Şifreniz hatalı";
        }
        else if (errorCode === 'auth/user-not-found') {
            document.querySelector('.cAlert').innerHTML = "sitemize kayıtlı böyle bir hesap bulunmamaktadır.";
        }
        else if (errorCode === 'auth/wrong-passwordError') {
            document.querySelector('.cAlert').innerHTML = "Şifrenizi çok fazla hatalı giriş yaptığınızdan dolayı hesabınız askıya alındı.";
        }
        setTimeout(function(){
            document.querySelector('.cAlert').style.display= 'none';
        }, 3000);
   

    });
}) 
   




function myFunction() {
    profileInfo();
    location.replace("home.html");
}

