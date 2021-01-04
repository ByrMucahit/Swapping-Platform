var email = document.getElementById("email");
var password = document.getElementById("password");
var cPasword = document.getElementById("cPassword");
var userName = document.getElementById("userName");
uyeOlBtn = document.getElementById('uyeOlBtn')
const auth = firebase.auth()
uyeOlBtn.addEventListener('click', (e) =>{

    e.preventDefault();

    if(password.value.length >= 6){
        //Confirm password and password is equal.
        if(password.value === cPasword.value){
        auth.createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
            emailVerification(email.value);
            console.log('Made it', user.email);
            myFunction();
            alert('Başarılı bir şekilde üye oldunuz. Giriş yapabilirsiniz');

        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error Code : "+ errorCode+" Error Message: "+errorMessage);
            if(errorCode === "auth/email-already-in-use"){
                document.querySelector('.cAlert').innerHTML = 'Zaten böyle bir hesap mevcut lütfen daha farklı bir hesap oluşturunuz'
            }
        });
        }
        else if(password.value !== cPasword.value){
            document.querySelector('.cAlert').innerHTML = 'Şifreler Uyuşmuyor.'
        }
    }

    else if(password.value.length < 6 ){
        document.querySelector('.alert').innerHTML = 'Lütfen 6 karakterden fazla şifre giriniz.'
    }
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },4000);

   
}) 
    
   



//EMAIL VERIFICATION
function emailVerification(email) {
    var user = firebase.auth().currentUser;
    firebase.auth().languageCode = 'tr';
    user.sendEmailVerification().then(function () {
        //Email Sent
    }).catch(function (error) {
        alert('bir hata meydana geldi');
    });

}

function myFunction() {
    location.replace("sign_in.html");
  }


