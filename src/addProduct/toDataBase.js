// Get Elements
const category = document.getElementById('CategoriSelectedOption');
const addBtn = document.getElementById('addProductBtn');
const productDescribe = document.getElementById('subject');
const productName = document.getElementById('productName');

// Getting Elements
var selectedImage = document.getElementById('imageSelection');

// Variables
var ImgName, ImgUrl;
var files = [];
var reader = new FileReader();

//Selection Process
selectedImage.addEventListener('click', (e) => {
    e.preventDefault();
    var input = document.createElement('input');
    input.type = 'file';
    input.onchange = e => {
        files = e.target.files;
        reader.onload = function () {
            document.getElementById('productImg').src = reader.result;
        }
        reader.readAsDataURL(files[0]);
    }
    input.click();
    console.log("Selection is ready");
})

rootref = database.ref('users/products/');

//Load Process
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var user = firebase.auth().currentUser;
    var text = category.options[category.selectedIndex].text;

    console.log("This's product Name : " + productName.value);
    console.log('this is category : ' + text);
    console.log("Describe Of productDescribe => " + productDescribe.value);
    console.log("User --->" + user.email);

    //Current User
    var user = firebase.auth().currentUser;
    ImgName = document.getElementById('productName').value;
    var uploadTask = firebase.storage().ref('Images/Products/' + user.uid + '/' + productName.value + ".png").put(files[0]);

    uploadTask.on('state_changes', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        document.getElementById('UpProgress').innerHTML = 'Upload' + progress + '%';
    },
        function (error) {
            const errorMessage = error.message;
            const errorCode = error.code;
            alert('error in saving the image , error image is : ' + errorMessage + "    Error Code : " + errorCode);
        },

        //Submit Image Link To Database//
        function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
                ImgUrl = url;

                rootref.child(user.uid).child(productName.value).set({
                    ürün_sahibi: user.email,
                    ürün_ismi: productName.value,
                    kategori: text,
                    ürün_tanitimi: productDescribe.value,
                    link: ImgUrl
                }).catch((error) => {
                    const ErrorCode = error.code;
                    const ErrorMessage = error.message;
                    console.log("Error Message : " + ErrorMessage + " ErrorCode : " + ErrorCode);
                })
            })
            alert('Image added succesfully');
        },
    
        // Retrievel Process
        function () {
            ImgName = productName.value;
            database.ref('users/products/').child(user.uid).child(productName.value).on('value', function (snapshot) {
                document.getElementById('productImg').src = snapshot.val().Link;
            })
        })
})





