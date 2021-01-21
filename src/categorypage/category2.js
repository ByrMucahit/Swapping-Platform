// Listening Event Listener
var otomobil = document.querySelector("input[name=otomobil]");
var arazi = document.querySelector("input[name=arazi]");
var suvAndPickup = document.querySelector("input[name=suvAndPickup]");
var motosiklet = document.querySelector("input[name=motosiklet]");
var minivanAndPanelvan = document.querySelector("input[name=minivanAndPanelvan]");
var ticariArac = document.querySelector("input[name=ticariArac]");
var ElektrikliArac = document.querySelector("input[name=ElektrikliArac]");
var modifiyeArac = document.querySelector("input[name=modifiyeArac]");
var havaArac = document.querySelector("input[name=havaArac]");
var ATV = document.querySelector("input[name=ATV]");
var UTV = document.querySelector("input[name=UTV]");
var Karavan = document.querySelector("input[name=Karavan]");
var EngelliPlakali = document.querySelector("input[name=EngelliPlakalı]");



//Displaying Product
var products = database.ref("Index/products");
var counter = 0
var VasıtaHtml = ``;
products.on("value", function (product) {
    if (product.exists()) {
        product.forEach(function (singleProduct) {

            var eachOneProduct = singleProduct.val();
            if (eachOneProduct.kategori === "Vasıta") {
                VasıtaHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                document.getElementById('catprod').innerHTML = VasıtaHtml;
            }
        })
    }
});




/* otomobil Filtre */
otomobil.addEventListener('change', function () {
    var otomobilHtml = ``;
    if (this.checked) {

        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    counter = counter + 1;
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Vasıta") {
                        if (eachOneProduct.filtre === "Otomobil") {
                            otomobilHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = otomobilHtml;
                        }
                    }
                })
            }
        });// console.log("Checkbox is checked..");
    } else {
        document.getElementById('catprod').innerHTML = VasıtaHtml;
    }
});

/* arazi Filtre */
arazi.addEventListener('change', function () {
    var araziHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {

                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Vasıta") {
                        if (eachOneProduct.filtre === "Arazi") {
                            araziHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = araziHtml;
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


/* suvAndPickup Filtre */
suvAndPickup.addEventListener('change', function () {
    var suvAndPickupHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();

                    if (eachOneProduct.kategori === "Vasıta") {
                        if (eachOneProduct.filtre === "SUV & Pickup") {
                            suvAndPickupHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = suvAndPickupHtml;
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


/* motosiklet Filtre */
motosiklet.addEventListener('change', function () {
    var motosikletHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Vasıta") {
                        if (eachOneProduct.filtre === "Motosiklet") {
                            motosikletHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = motosikletHtml;
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

})


/* minivanAndPanelvan Filtre */
minivanAndPanelvan.addEventListener('change', function () {
    var minivanAndPanelvanHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Vasıta") {
                        if (eachOneProduct.filtre === "Minivan & Panelvan") {
                            minivanAndPanelvanHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = minivanAndPanelvanHtml;
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

})



/* ticariArac Filtre */
ticariArac.addEventListener('change', function () {
    var ticariAracHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();

                    if (eachOneProduct.kategori === "Vasıta") {
                        if (eachOneProduct.filtre === "Ticari Araç") {
                            ticariAracHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = ticariAracHtml;
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

})


/* ElektrikliArac Filtre */
ElektrikliArac.addEventListener('change', function () {
    var ElektrikliAracHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Vasıta") {
                        if (eachOneProduct.filtre === "Elektrikli Araçlar") {
                            ElektrikliAracHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = ElektrikliAracHtml;
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

})

/* modifiyeArac Filtre */
modifiyeArac.addEventListener('change', function () {
    var modifiyeAracHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Vasıta") {
                        if (eachOneProduct.filtre === "Modifiye Araçlar") {
                            modifiyeAracHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = modifiyeAracHtml;
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

})

/* havaArac Filtre */
havaArac.addEventListener('change', function () {
    var havaAracHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Vasıta") {
                        if (eachOneProduct.filtre === "Hava Araçları") {
                            havaAracHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = havaAracHtml;
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

})


/* ATV Filtre */
ATV.addEventListener('change', function () {
    var ATVHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Vasıta") {
                        if (eachOneProduct.filtre === "ATV") {
                            ATVHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = ATVHtml;
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

})

/* UTV Filtre */
UTV.addEventListener('change', function () {
    var UTVHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Vasıta") {
                        if (eachOneProduct.filtre === "UTV") {
                            UTVHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = UTVHtml;
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

})

/* Karavan Filtre */
Karavan.addEventListener('change', function () {
    var KaravanHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Vasıta") {
                        if (eachOneProduct.filtre === "Karavan") {
                            KaravanHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = KaravanHtml;
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

})

/* EngelliPlakali Filtre */
EngelliPlakali.addEventListener('change', function () {
    var EngelliPlakaliHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "Vasıta") {
                        if (eachOneProduct.filtre === "Engelli Plakalı Araçlar") {
                            EngelliPlakaliHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = EngelliPlakaliHtml;
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

})