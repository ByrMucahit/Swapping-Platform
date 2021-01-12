// Variables
var ImgName, ImgUrl;
var files = [];
var reader = new FileReader();

// Getting Elements
var selectedImage = document.getElementById('imageSelection');



//Selection Process
selectedImage.addEventListener('click', (e)=> {
    e.preventDefault();
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange= e =>{
        files = e.target.files;
        reader.onload = function(){
            document.getElementById('productImg').src = reader.result;
        }
        reader.readAsDataURL(files[0]);
    }
    input.click();
    console.log("Selection is ready");
})


//Upload Process
document.getElementById('addProductBtn').addEventListener('click', (e) => {
    
    e.preventDefault();
    
    //Current User
    var user = firebase.auth().currentUser;
    ImgName = document.getElementById('productName').value;
    var uploadTask = firebase.storage().ref('Images/Products/'+user.uid+'/'+productName.value+".png").put(files[0]);

    uploadTask.on('state_changes',function(snapshot){
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 ;
        document.getElementById('UpProgress').innerHTML = 'Upload'+ progress+ '%';
    },
    
    function(error){
        const errorMessage = error.message ;
        const errorCode = error.code;

        alert('error in saving the image , error image is : '+errorMessage + "    Error Code : "+errorCode);

    },
    //Submit Image Link To Database//
    function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(url){
            ImgUrl = url;
            firebase.database().ref('users/products/').child(user.uid).child(productName.value).set({
                Link: ImgUrl
            });
            alert('Image added succesfully');
        })
    },
    function(){
        ImgName = productName.value;
        database.ref('users/products/').child(user.uid).child(productName.value).on('value', function(snapshot){
            document.getElementById('productImg').src = snapshot.val().Link;
        })
    }
    )

})