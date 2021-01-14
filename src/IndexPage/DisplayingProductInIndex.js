
var products = database.ref("Index/products")
var counter = 0
products.on("value", function(product){
    if(product.exists())
    {
        var productHtml = ``;
        product.forEach(function(singleProduct){
            counter = counter + 1;
            var eachOneProduct = singleProduct.val();
            var keys = Object.keys(eachOneProduct);
            var k = keys;
            var host = eachOneProduct.ürün_sahibi;
            var prod = eachOneProduct.kategori;
            productHtml += `<div class="col-lg-3 col-sm-6 col-md-3"><a href="#"><div class="box-img"><h4>${eachOneProduct.kategori}</h4><img src="${eachOneProduct.link}" alt="" /></div></a></div>`
            
            document.getElementById('productCategory').innerHTML = productHtml;
            
            console.log(eachOneProduct.link)
        })
    }
})
