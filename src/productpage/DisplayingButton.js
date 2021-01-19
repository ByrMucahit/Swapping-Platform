// Get Button Elements
auth.onAuthStateChanged(function (user) {
    var user = auth.currentUser;
    if (user) {
        document.getElementById("loginTransaction").style.display = 'none';
        document.getElementById("ProfileStage").style.display = "block";
        document.getElementById("bottomUyeOlBtn").style.display = "none";
        var user = firebase.auth().currentUser;
    }
    else if(!user) {
            document.getElementById('loginTransaction').style.display = 'block';
            document.getElementById("bottomUyeOlBtn").style.display = "block";
            document.getElementById("ProfileStage").style.display = "none";   
            }})