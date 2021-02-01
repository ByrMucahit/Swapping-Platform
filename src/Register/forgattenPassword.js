// FORGATTEN PASSWORD

// Get button event
const forgottenPasswordButton = document.getElementById('forgottenPasswordBtn');
const emailAdress = document.getElementById('forgottenPassword');

forgottenPasswordButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(typeof emailAdress)
    auth.sendPasswordResetEmail(emailAdress.value).then(function () {
        //Email Sent
        //window.alert("Email has been sent to you, Please check and verify.");
        setTimeout(function () {
            location.replace("sign_in.html")
        }, 1000);
    }).catch(function (error) {
        //An Error Happened
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("Error Code : " + errorCode + " Error Message : " + errorMessage);

        if (errorCode === "auth/user-not-found") {
            document.getElementById("cAlert").innerHTML = "Bu kimlikte bir kullanıcı bulunmamaktadır. Lütfen Emailinizi kontrol ediniz."
        }
        if (errorCode === "auth/invalid-email") {
            document.getElementById("cAlert").innerHTML = "Geçersiz Email Adresi, Lütfen Geçerli Bir Formatta Email Adresi Giriniz."
        }
        else {
            document.getElementById("cAlert").innerHTML = "Endileşenmeyiniz, Sistemsel kaynaklı bir hata vardır. Daha sonra tekrar deneyiniz :)"
        }
        setTimeout(function () {
            document.getElementById("cAlert").style.display = "none";
        }, 3000);
    }

    )
})
