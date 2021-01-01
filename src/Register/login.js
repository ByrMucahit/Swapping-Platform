//EVENT LISTENER
document.getElementById('signForm').addEventListener('submit', signIn);

// CREATING REFERENCE
const auth = firebase.auth()



auth.onStateChanged(function (user) {
    if (user) {

        var user = firebase.auth().currentUser;
        if (user != null) {
            
            var li = $(".list li").css({ 'display': 'none' })
            if (li ) {
                $(".collapse navbar-collapse").css({ 'visibility': 'hidden' })
            } else {
                $(".collapse navbar-collapse").css({ 'display': 'none' })
            }
        }
    } else {


    }
}
)
function signIn(e) {
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
        if (errorCode === 'auth/wrong-password') {
            document.getElementById('Warn').innerHTML = "Mailiniz yada Şifreniz hatalı";
            console.log("Error Code : " + errorCode + "Error Message : " + errorMessage);
        }
        else if (errorCode === 'auth/user-not-found') {
            document.getElementById('Warn').innerHTML = "sitemize kayıtlı böyle bir hesap bulunmamaktadır.";
        }


    });
}



function myFunction() {
    location.replace("home.html");
}

