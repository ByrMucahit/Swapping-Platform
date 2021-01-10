//Displaying Button 
// Get Button Elements
auth.onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById('aboutUsSignBtn').style.display = 'block';
        var user = firebase.auth().currentUser;
        if (user != null) {
            document.getElementById('aboutUsSignBtn').style.display = 'none';   
            }} else {}})