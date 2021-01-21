// Listening Event Listener
var konut = document.querySelector("input[name=konut]");
var isYeri = document.querySelector("input[name=workPlace]");
var arsa = document.querySelector("input[name=arsa]");
var project = document.querySelector("input[name=project]");
var bina = document.querySelector("input[name=bina]");
var devre = document.querySelector("input[name=devre]");
var turist = document.querySelector("input[name=turist]");


//Displaying Product
var products = database.ref("Index/products");
var counter = 0
var productHtml = ``;
products.on("value", function (product) {
    if (product.exists()) {
        product.forEach(function (singleProduct) {

            var eachOneProduct = singleProduct.val();
            if (eachOneProduct.kategori === "Emlak") {
                productHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                document.getElementById('catprod').innerHTML = productHtml;
            }
        })
    }
});




/* Konut Filtre */
konut.addEventListener('change', function () {
    var konutHtml = ``;
    if (this.checked) {

        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    counter = counter + 1;
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Emlak") {
                        if (eachOneProduct.filtre === "konut") {
                            konutHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = konutHtml;
                        }
                    }
                })
            }
        });// console.log("Checkbox is checked..");
    } else {
        document.getElementById('catprod').innerHTML = productHtml;
    }
});

/* İs Yeri Filtre */
isYeri.addEventListener('change', function () {
    var IsyeriHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {

                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Emlak") {
                        if (eachOneProduct.filtre === "İş Yeri") {
                            IsyeriHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = IsyeriHtml;
                        }
                    }
                })
            }
        }); //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = productHtml;
        //console.log('non');
    }})


/* Arsa Filtre */
arsa.addEventListener('change', function () {
    var arsaHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();

                    if (eachOneProduct.kategori === "Emlak") {
                        if (eachOneProduct.filtre === "Arsa") {
                            arsaHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = arsaHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = productHtml;
        //console.log('non');
    }
    var arsaHtml = ``;
})


/* Proeject Filtre */
project.addEventListener('change', function () {
    var projectHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Emlak") {
                        if (eachOneProduct.filtre === ">Projeler") {
                            projectHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = projectHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = productHtml;
        //console.log('non');
    }

})


/* Bina Filtre */
bina.addEventListener('change', function () {
    var binaHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Emlak") {
                        if (eachOneProduct.filtre === "Bina") {
                            binaHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = binaHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = productHtml;
        //console.log('non');
    }

})



/* devre Filtre */
devre.addEventListener('change', function () {
    var devretHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();

                    if (eachOneProduct.kategori === "Emlak") {
                        if (eachOneProduct.filtre === "Devre Mülk") {
                            devretHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = devretHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = productHtml;
        //console.log('non');
    }

})


/* turist Filtre */
turist.addEventListener('change', function () {
    var turistHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Emlak") {
                        if (eachOneProduct.filtre === "Turistik Tesis") {
                            turistHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = turistHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = productHtml;
        //console.log('non');
    }

})