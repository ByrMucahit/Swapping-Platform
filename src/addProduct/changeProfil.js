const accountDetails = document.getElementById('userName');
auth.onAuthStateChanged(function (user) {
    if (user) {
        var user = firebase.auth().currentUser;
        if (user != null) {
            const html = `<h3>${user.email}</h3>`;
            accountDetails.innerHTML = html;}
        } else {}})