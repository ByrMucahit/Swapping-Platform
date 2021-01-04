var ref = firebase.database().ref();

export default function profileInfo() {
    

    ref.on("value", function(snapshot) {
       console.log(snapshot.val());
       

    }, function (error) {
       console.log("Error: " + error.code);
    });
}
