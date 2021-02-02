var closebtns = document.getElementsByClassName("close");
var i;


 function removed(obj){
     console.log(obj);
     console.log(firebase.auth().currentUser.uid);
     var ids = obj;
     const user = firebase.auth().currentUser.uid
     var answers =confirm(obj + "  ürününü silmek istediğinize emin misiniz ? ");
     console.log(answers);
     if (answers === true)
     {
        firebase.database().ref('users').child('products').child(user).child(ids).remove();
        firebase.database().ref('Index').child('products').child(ids).remove();

     }

     

 }                       