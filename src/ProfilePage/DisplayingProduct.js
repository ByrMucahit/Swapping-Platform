//Displaying Product


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
var uid = user.uid;  
var products = database.ref("users/products").child(uid);
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
            productHtml += `<div class="col-md-4 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a hred="#><img  alt="#" src=${eachOneProduct.link}/>"</a></div><div class="dit-t clearfix"><div class="left-ti"><p>"Şehir"</p><br><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><a href="#" tabindex= "0">$1220</a></div></div></div></div>`
            
            document.getElementById('productlist').innerHTML = productHtml;
            
            console.log(eachOneProduct.link)
        })
    }
})

      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  /*
console.log(userId);
p*/