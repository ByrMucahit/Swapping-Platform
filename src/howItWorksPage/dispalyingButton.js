//Displaying Button 
// Get Button Elements
// Get Button Elements
auth.onAuthStateChanged(function (user) {
    var user = auth.currentUser;
    if (user) {
        document.getElementById('howItWorkSignBtn').style.display = 'none';
        document.getElementById("bottomUyeOlBtn").style.display = "none";
        document.getElementById("profil-help-box").style.display = "block";
        var user = firebase.auth().currentUser;
    }
    else if(!user) {
        document.getElementById('howItWorkSignBtn').style.display = 'block';   
        document.getElementById("bottomUyeOlBtn").style.display = "block";
        document.getElementById("profil-help-box").style.display = "none";
            }})