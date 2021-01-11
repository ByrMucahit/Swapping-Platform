// PROFILE DISPLAYING BUTTON
auth.onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById('profileGirisBtn').style.display = 'block';
        document.getElementById("bottomUyeOlBtn").style.display = "block";
        var user = firebase.auth().currentUser;
        if (user != null) {
            document.getElementById('profileGirisBtn').style.display = 'none';  
            document.getElementById("bottomUyeOlBtn").style.display = "none";
            }} else {}});