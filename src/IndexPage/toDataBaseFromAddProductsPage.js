
// Getting Elements
var selectedImage = document.getElementById('imageSelection');


// Selector add Event Listener
estatefilter = document.querySelector("#estateFilter");
vehiclefilter = document.querySelector("#vehiclefilter");
swapFilter = document.querySelector('#swapFilter');
machineFilter = document.querySelector('#machineFilter');

// Variables
var ImgName, ImgUrl;
var files = [];
var reader = new FileReader();



rootsrefforIndex = database.ref('Index/products/');


//Load Process
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var user = firebase.auth().currentUser;
    var text = category.options[category.selectedIndex].text;
    
    console.log("This's product Name : " + productName.value);
    console.log('this is category : ' + text);
    console.log("Describe Of productDescribe => " + productDescribe.value);
    console.log("Filter => " + estatefilter.value);
    console.log("Filter => " + swapFilter.value);
    console.log("Filter => " + machineFilter.value);
    console.log("Filter => " + vehiclefilter.value);
    console.log("User --->" + user.email);

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

                if(text === "Emlak")
                {
                    rootsrefforIndex.child(productName.value).set({
                        ürün_sahibi: user.email,
                        ürün_ismi: productName.value,
                        kategori: text,
                        ürün_tanitimi: productDescribe.value,
                        link: ImgUrl,
                        uid: user.uid,
                        filtre: estatefilter.value
                    }).catch((error) => {
                        const ErrorCode = error.code;
                        const ErrorMessage = error.message;
                        console.log("Error Message : " + ErrorMessage + " ErrorCode : " + ErrorCode);
                    }) 
                }
                if(text === "Vasıta")
                {
                    rootsrefforIndex.child(productName.value).set({
                        ürün_sahibi: user.email,
                        ürün_ismi: productName.value,
                        kategori: text,
                        ürün_tanitimi: productDescribe.value,
                        link: ImgUrl,
                        uid: user.uid,
                        filtre: vehiclefilter.value
                    }).catch((error) => {
                        const ErrorCode = error.code;
                        const ErrorMessage = error.message;
                        console.log("Error Message : " + ErrorMessage + " ErrorCode : " + ErrorCode);
                    }) 
                }
                if(text === "İkinci El Alışveriş")
                {
                    rootsrefforIndex.child(productName.value).set({
                        ürün_sahibi: user.email,
                        ürün_ismi: productName.value,
                        kategori: text,
                        ürün_tanitimi: productDescribe.value,
                        link: ImgUrl,
                        uid: user.uid,
                        filtre: swapFilter.value
                    }).catch((error) => {
                        const ErrorCode = error.code;
                        const ErrorMessage = error.message;
                        console.log("Error Message : " + ErrorMessage + " ErrorCode : " + ErrorCode);
                    }) 
                }
                if(text === "İş Makineleri ve Sanayi")
                {
                    rootsrefforIndex.child(productName.value).set({
                        ürün_sahibi: user.email,
                        ürün_ismi: productName.value,
                        kategori: text,
                        ürün_tanitimi: productDescribe.value,
                        link: ImgUrl,
                        uid: user.uid,
                        filtre: machineFilter.value
                    }).catch((error) => {
                        const ErrorCode = error.code;
                        const ErrorMessage = error.message;
                        console.log("Error Message : " + ErrorMessage + " ErrorCode : " + ErrorCode);
                    }) 
                }

             
            })
            alert('Image added succesfully');
        },
        function(){
            console.log("It's onright");
        },)})






