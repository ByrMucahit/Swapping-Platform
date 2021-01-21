// Listening Event Listener
var Bilgisayar = document.querySelector("input[name=bilgisayar]");
var phone = document.querySelector("input[name=phone]");
var camera = document.querySelector("input[name=camera]");
var homeDecoration = document.querySelector("input[name=homeDecoration]");
var HomeElectronic = document.querySelector("input[name=HomeElectronic]");
var ElectricThingHome = document.querySelector("input[name=ElectricThingHome]");
var Dress = document.querySelector("input[name=Dress]");
var BabyAndMomy = document.querySelector("input[name=BabyAndMomy]");
var personality = document.querySelector("input[name=personality]");
var hobies = document.querySelector("input[name=hobies]");
var gameConsol = document.querySelector("input[name=gameConsol]");
var book = document.querySelector("input[name=book]");
var film = document.querySelector("input[name=film]");
var music = document.querySelector("input[name=music]");
var spor = document.querySelector("input[name=spor]");
var taki = document.querySelector("input[name=taki]");
var gold = document.querySelector("input[name=gold]");
var collection = document.querySelector("input[name=collection]");
var histories = document.querySelector("input[name=history]");
var build = document.querySelector("input[name=build]");
var Markt = document.querySelector("input[name=Markt]");
var technicElectro = document.querySelector("input[name=technicElectro]");
var Office = document.querySelector("input[name=Office]");
var food = document.querySelector("input[name=food]");
var Clock = document.querySelector("input[name=Clock]");





//Displaying Product
var products = database.ref("Index/products");
var counter = 0
var ikinciElHtml = ``;
products.on("value", function (product) {
    if (product.exists()) {
        product.forEach(function (singleProduct) {

            var eachOneProduct = singleProduct.val();
            if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                ikinciElHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                document.getElementById('catprod').innerHTML = ikinciElHtml;
            }
        })
    }
});




/* otomobil Filtre */
Bilgisayar.addEventListener('change', function () {
    var bilgisayarHtml = ``;
    if (this.checked) {

        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    counter = counter + 1;
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Bilgisayar") {
                            bilgisayarHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = bilgisayarHtml;
                        }
                    }
                })
            }
        });// console.log("Checkbox is checked..");
    } else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
    }
});



/* phone Filtre */
phone.addEventListener('change', function () {
    var phoneHtml = ``;
    if (this.checked) {

        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    counter = counter + 1;
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Cep Telefonu") {
                            phoneHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = phoneHtml;
                        }
                    }
                })
            }
        });// console.log("Checkbox is checked..");
    } else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
    }
});

/* cameraHtml Filtre */
camera.addEventListener('change', function () {
    var cameraHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {

                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Fotoğraf & Kamera") {
                            cameraHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = cameraHtml;
                        }
                    }
                })
            }
        }); //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }
})


/* homeDecoration Filtre */
homeDecoration.addEventListener('change', function () {
    var homeDecorationHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();

                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Ev Dokerasyon") {
                            homeDecorationHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = homeDecorationHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }
    var arsaHtml = ``;
})


/* HomeElectronic Filtre */
HomeElectronic.addEventListener('change', function () {
    var HomeElectronicHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Ev Elektroniği") {
                            HomeElectronicHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = HomeElectronicHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})


/* ElectricThingHome Filtre */
ElectricThingHome.addEventListener('change', function () {
    var ElectricThingHomeHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Elektrikli Ev Aletleri") {
                            ElectricThingHomeHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = ElectricThingHomeHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})



/* Dress Filtre */
Dress.addEventListener('change', function () {
    var DressHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();

                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Giyim & Aksesuar") {
                            DressHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = DressHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})


/* Clock Filtre */
Clock.addEventListener('change', function () {
    var ClockHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {

                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();

                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Saat") {
                            ClockHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = ClockHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})



/* BabyAndMomy Filtre */
BabyAndMomy.addEventListener('change', function () {
    var BabyAndMomyHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Anne & Bebek") {
                            BabyAndMomyHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = BabyAndMomyHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})

/* personality Filtre */
personality.addEventListener('change', function () {
    var personalityHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Kişisel Bakım & Kozmetik") {
                            personalityHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = personalityHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})

/* hobies Filtre */
hobies.addEventListener('change', function () {
    var hobiesHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Hobi & Oyuncak") {
                            hobiesHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = hobiesHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})


/* gameConsol Filtre */
gameConsol.addEventListener('change', function () {
    var gameConsolHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Oyun & Konsol") {
                            gameConsolHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = gameConsolHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})

/* book Filtre */
book.addEventListener('change', function () {
    var bookHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Kitap") {
                            bookHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = bookHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})

/* film Filtre */
film.addEventListener('change', function () {
    var filmHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Dergi & Film") {
                            filmHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = filmHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})

/* music Filtre */
music.addEventListener('change', function () {
    var musicHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Müzik") {
                            musicHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = musicHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})


/* spor Filtre */
spor.addEventListener('change', function () {
    var sporHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Spor") {
                            sporHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = sporHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})


/* taki Filtre */
taki.addEventListener('change', function () {
    var takiHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Takı") {
                            takiHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = takiHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})


/* gold Filtre */
gold.addEventListener('change', function () {
    var goldHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Mücevher & Altın") {
                            goldHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = goldHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})

/* collection Filtre */
collection.addEventListener('change', function () {
    var collectionHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Koleksiyon") {
                            collectionHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = collectionHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})



/* history Filtre */
histories.addEventListener('change', function () {
    var historyHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Antika") {
                            historyHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = historyHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})



/* build Filtre */
build.addEventListener('change', function () {
    var buildHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Bahçe & Yapı Market") {
                            buildHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = buildHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})


/* Markt Filtre */
Markt.addEventListener('change', function () {
    var MarktHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Market") {
                            MarktHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = MarktHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})


/* technicElectro Filtre */
technicElectro.addEventListener('change', function () {
    var technicElectroHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Teknik Elektronik") {
                            technicElectroHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = technicElectroHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})


/* Office Filtre */
Office.addEventListener('change', function () {
    var OfficeHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Ofis & Kırtasiye") {
                            OfficeHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = OfficeHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})

/* food Filtre */
food.addEventListener('change', function () {
    var foodHtml = ``;
    if (this.checked) {
        products.on("value", function (product) {
            if (product.exists()) {
                product.forEach(function (singleProduct) {
                    var eachOneProduct = singleProduct.val();
                    if (eachOneProduct.kategori === "İkinci El Alışveriş") {
                        if (eachOneProduct.filtre === "Yiyecek & İçecek") {
                            foodHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = foodHtml;
                        }
                    }
                })
            }
        });

        //console.log("It's done");
    }
    else {
        document.getElementById('catprod').innerHTML = ikinciElHtml;
        //console.log('non');
    }

})