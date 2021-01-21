// Listening Event Listener
var isMakineleri = document.querySelector("input[name=isMakineleri]");
var tarimMakineleri = document.querySelector("input[name=tarimMakineleri]");
var sanayi = document.querySelector("input[name=sanayi]");
var elektrikVeEnerji = document.querySelector("input[name=elektrikVeEnerji]");


//Displaying Product
var products = database.ref("Index/products");
var counter = 0
var VasıtaHtml = ``;
products.on("value", function (product) {
    if (product.exists()) {
        product.forEach(function (singleProduct) {

            var eachOneProduct = singleProduct.val();
            if (eachOneProduct.kategori === "İş Makineleri ve Sanayi") {
                VasıtaHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                document.getElementById('catprod').innerHTML = VasıtaHtml;
            }
        })
    }
});




/* isMakineleri Filtre */
isMakineleri.addEventListener('change', function () {
    var isMakineleriHtml = ``;
    if (this.checked) {

        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    counter = counter + 1;
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İş Makineleri ve Sanayi") {
                        if (eachOneProduct.filtre === "İş Makineleri") {
                            isMakineleriHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = isMakineleriHtml;
                        }
                    }
                })
            }
        });// console.log("Checkbox is checked..");
    } else {
        document.getElementById('catprod').innerHTML = VasıtaHtml;
    }
});

/* tarimMakineleri Filtre */
tarimMakineleri.addEventListener('change', function () {
    var tarimMakineleriHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {

                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İş Makineleri ve Sanayi") {
                        if (eachOneProduct.filtre === "Tarım Makineleri") {
                            tarimMakineleriHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = tarimMakineleriHtml;
                        }
                    }
                })
            }
        }); //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = VasıtaHtml;
        //console.log('non');
    }
})


/* elektrikVeEnerji Filtre */
elektrikVeEnerji.addEventListener('change', function () {
    var elektrikVeEnerjiHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();

                    if (eachOneProduct.kategori === "İş Makineleri ve Sanayi") {
                        if (eachOneProduct.filtre === "Elektrik & Enerji") {
                            elektrikVeEnerjiHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = elektrikVeEnerjiHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = VasıtaHtml;
        //console.log('non');
    }
    var arsaHtml = ``;
})

/* sanayi Filtre */
sanayi.addEventListener('change', function () {
    var sanayiHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();

                    if (eachOneProduct.kategori === "İş Makineleri ve Sanayi") {
                        if (eachOneProduct.filtre === "Sanayi") {
                            sanayiHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = sanayiHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = VasıtaHtml;
        //console.log('non');
    }
    var arsaHtml = ``;
})

