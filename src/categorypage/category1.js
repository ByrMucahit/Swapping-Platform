// Listening Event Listener
var konut = document.querySelector("input[name=konut]");
var isYeri = document.querySelector("input[name=workPlace]");
var arsa = document.querySelector("input[name=arsa]");


//Displaying Product
var products = database.ref("Index/products");
var counter = 0
var productHtml = ``;
products.on("value", function (product) {
    if (product.exists()) {
        
        product.forEach(function (singleProduct) {
            counter = counter + 1;
            var eachOneProduct = singleProduct.val();
            var keys = Object.keys(eachOneProduct);
            var k = keys;
            var host = eachOneProduct.ürün_sahibi;
            var prod = eachOneProduct.kategori;
            console.log(prod);
            if (eachOneProduct.kategori === "Emlak") {
                    productHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                    document.getElementById('catprod').innerHTML = productHtml;  }})}
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
                        var keys = Object.keys(eachOneProduct);
                        var k = keys;
                        var host = eachOneProduct.ürün_sahibi;
                        var prod = eachOneProduct.kategori;
                        console.log(prod);
                        if (eachOneProduct.kategori === "Emlak") {
                            if(eachOneProduct.filtre === "konut"){
                                konutHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                                document.getElementById('catprod').innerHTML = konutHtml;  }}})}
            });
        
        console.log("Checkbox is checked..");
    } else {
        document.getElementById('catprod').innerHTML = productHtml;
    }
   
});

isYeri.addEventListener('change', function() {
    var IsyeriHtml = ``;
    if(this.checked){
        products.on("value", function (product) {
            if (product.exists()) {
              
                product.forEach(function (singleProduct) {
                    counter = counter + 1;
                    var eachOneProduct = singleProduct.val();
                    var keys = Object.keys(eachOneProduct);
                    var k = keys;
                    var host = eachOneProduct.ürün_sahibi;
                    var prod = eachOneProduct.kategori;
                    console.log(prod);
                    if (eachOneProduct.kategori === "Emlak") {
                        if(eachOneProduct.filtre === "İş Yeri"){
                            IsyeriHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = IsyeriHtml;  }}})}
        });
    
        console.log("It's done");
    }
    else{
        document.getElementById('catprod').innerHTML = productHtml;
        console.log('non');
    }
})


/* Arsa Filtre */
arsa.addEventListener('change', function() {
    var arsaHtml = ``;
    if(this.checked){
        products.on("value", function (product) {
            if (product.exists()) {
              
                product.forEach(function (singleProduct) {
                    counter = counter + 1;
                    var eachOneProduct = singleProduct.val();
                    var keys = Object.keys(eachOneProduct);
                    var k = keys;
                    var host = eachOneProduct.ürün_sahibi;
                    var prod = eachOneProduct.kategori;
                    console.log(prod);
                    if (eachOneProduct.kategori === "Emlak") {
                        if(eachOneProduct.filtre === "Arsa"){
                            arsaHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                            document.getElementById('catprod').innerHTML = arsaHtml;  }}})}
        });
    
        console.log("It's done");
    }
    else{
        document.getElementById('catprod').innerHTML = productHtml;
        console.log('non');
    }
    var arsaHtml = ``;
})