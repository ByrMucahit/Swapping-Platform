// Get Elements

const category = document.getElementById('CategoriSelectedOption');
const addBtn = document.getElementById('addProductBtn');
const productDescribe = document.getElementById('subject');
const productName = document.getElementById('productName');

rootref = database.ref('users/products/');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var user = firebase.auth().currentUser;
    var text= category.options[category.selectedIndex].text;

    console.log("This's product Name : " + productName.value);
    console.log('this is category : '+ text);
    console.log("Describe Of productDescribe => " + productDescribe.value);
    console.log("User --->" + user.email);

    rootref.child(user.uid).child(productName.value).set({
        ürün_sahibi: user.email,
        kategori : text,
        ürün_tanitimi : productDescribe.value
    }).catch((error) =>{
        const ErrorCode = error.code;
        const ErrorMessage = error.message;

        console.log("Error Message : "+ ErrorMessage + " ErrorCode : "+ErrorCode);})})