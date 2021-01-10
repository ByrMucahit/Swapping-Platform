//Displaying Button 
// Get Button Elements
auth.onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById('howItWorkSignBtn').style.display = 'block';
        var user = firebase.auth().currentUser;
        if (user != null) {
            document.getElementById('howItWorkSignBtn').style.display = 'none';   
            }} else {}})