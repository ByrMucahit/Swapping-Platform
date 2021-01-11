//Displaying Button 
// Get Button Elements
auth.onAuthStateChanged(function (user) {
    if (user) {
        document.getElementById('howItWorkSignBtn').style.display = 'block';
        document.getElementById("bottomUyeOlBtn").style.display = "block";
        var user = firebase.auth().currentUser;
        if (user != null) {
            document.getElementById('howItWorkSignBtn').style.display = 'none';   
            document.getElementById("bottomUyeOlBtn").style.display = "none";
            }} else {}})