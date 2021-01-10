// Get Button Elements
auth.onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById('girisBtn').style.display = 'block';
        var user = firebase.auth().currentUser;
        if (user != null) {
            document.getElementById('girisBtn').style.display = 'none';   
            }} else {}})