var closebtns = document.getElementsByClassName("close");
var i;
 function removed(obj){
     //console.log(obj);
     //console.log(firebase.auth().currentUser.uid);
     var ids = obj;
     const user = firebase.auth().currentUser.uid
     swal({
        title: "Emin misiniz?",
        text: "Silmek istediğinize emin misiniz ?",
        icon: "warning",
        buttons: ["iptal",true],
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            firebase.database().ref('users').child('products').child(user).child(ids).remove();
            firebase.database().ref('Index').child('products').child(ids).remove();
          swal(ids+ " Ürününüz silinmiştir.", {
            icon: "success",
          });
          location.replace('profile.html');
        } else {
          swal("Ürün silimi iptal edilmiştir. !!!");
        }});}                 