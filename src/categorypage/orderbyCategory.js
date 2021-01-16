// Get Element
const addProductBtn = document.getElementById('addProductBtn');
var user = auth.currentUser;
setTimeout(function(){
    console.log("");
},3000);
categoryroot = database.ref('Categoryies/Category');
addProductBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    ImgName = document.getElementById('productName').value;
    var uploadTask = firebase.storage().ref('Images/Products/User/' + productName.value + ".png").put(files[0]);

    var text = category.options[category.selectedIndex].text;

    console.log("hey:"+text);
    uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
        ImgUrl = url;
    categoryroot.child(text).set({
        category: text ,
        product_name: productName,
        describe_product: productDescribe,
        host: user.email,
        link: ImgUrl
    
    }).catch((error) =>{
        const ErrorCode = error.code;
        const ErrorMessage = error.message;
        console.log("Error Message : " + ErrorMessage + " ErrorCode : " + ErrorCode);
    })
    alert('Image added succesfully');
    });
    
});