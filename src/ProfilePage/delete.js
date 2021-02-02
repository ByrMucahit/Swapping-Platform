var closebtns = document.getElementsByClassName("close");
var i;
 function removed(obj){
     //console.log(obj);
     //console.log(firebase.auth().currentUser.uid);
     var ids = obj;
     const user = firebase.auth().currentUser.uid
     swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            firebase.database().ref('users').child('products').child(user).child(ids).remove();
            firebase.database().ref('Index').child('products').child(ids).remove();
          swal(ids+ " Ürününüz silinmiştir.", {
            icon: "success",
          });
        } else {
          swal("Ürün silimi iptal edilmiştir. !!!");
        }});}                 