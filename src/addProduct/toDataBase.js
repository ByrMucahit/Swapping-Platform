// Get Elements
var category = document.getElementById('SelectedCategories');
const addBtn = document.getElementById('addProductBtn');
const productDescribe = document.getElementById('subject');
const productName = document.getElementById('productName');

// Selector add Event Listener
var estatefilter = document.querySelector("#estateFilter");
var vehiclefilter = document.querySelector("#vehiclefilter");
var swapFilter = document.querySelector('#swapFilter');
var machineFilter = document.querySelector('#machineFilter');



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

    
    console.log("Emlak : " + estatefilter.value);
    console.log("Vasıta : " + vehiclefilter.value);
    console.log("İkinci El :" + swapFilter.value);
    console.log("İş Makineleri : " + machineFilter.value);
    //console.log("This's product Name : " + productName.value);
    console.log('this is category : ' + text);
    //console.log("Describe Of productDescribe => " + productDescribe.value);
    //console.log("User --->" + user.email);


    ImgName = document.getElementById('productName').value;
    var uploadTask = firebase.storage().ref('Images/Products/User/' + productName.value + ".png").put(files[0]);

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
                if (text === "Emlak")
                {

                    rootref.child(user.uid).child(productName.value).set({
                        ürün_sahibi: user.email,
                        ürün_ismi: productName.value,
                        kategori: text,
                        ürün_tanitimi: productDescribe.value,
                        link: ImgUrl,
                        filtre:estatefilter.value
                    }).then(function(){
                       
                        document.getElementById('sccard').style.display = 'block';
                        setInterval(function(){
                            document.getElementById('sccard').style.display= 'none';
                        },5000)

                        document.getElementById('productName').value = "";
                        document.getElementById('subject').value = "";
                        document.getElementById('productImg').remove;
                        
                        document.getElementById('SelectedCategories').options.selectedIndex = 0;
                        document.getElementById('vasitaCat').style.visibility="hidden";

                       

                        
                    }
                        
                        
                       


                    ).catch((error) => {
                        const ErrorCode = error.code;
                        const ErrorMessage = error.message;
                        console.log("Error Message : " + ErrorMessage + " ErrorCode : " + ErrorCode);
                    })
                }
                if (text === "İkinci El Alışveriş")
                {

                    rootref.child(user.uid).child(productName.value).set({
                        ürün_sahibi: user.email,
                        ürün_ismi: productName.value,
                        kategori: text,
                        ürün_tanitimi: productDescribe.value,
                        link: ImgUrl,
                        filtre:swapFilter.value
                    }).catch((error) => {
                        const ErrorCode = error.code;
                        const ErrorMessage = error.message;
                        console.log("Error Message : " + ErrorMessage + " ErrorCode : " + ErrorCode);
                    })
                }
                if (text === "İş Makineleri ve Sanayi")
                {

                    rootref.child(user.uid).child(productName.value).set({
                        ürün_sahibi: user.email,
                        ürün_ismi: productName.value,
                        kategori: text,
                        ürün_tanitimi: productDescribe.value,
                        link: ImgUrl,
                        filtre:estatefilter.value
                    }).catch((error) => {
                        const ErrorCode = error.code;
                        const ErrorMessage = error.message;
                        console.log("Error Message : " + ErrorMessage + " ErrorCode : " + ErrorCode);
                    })
                }
              
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






