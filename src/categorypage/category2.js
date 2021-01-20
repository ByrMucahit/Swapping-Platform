//Displaying Product
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
  var uid = user.uid;  
  var products = database.ref("Index/products");
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
              console.log(prod);
              if(eachOneProduct.kategori === "Vasıta"){
                  productHtml += `<div class="col-md-6 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#"><img src="${eachOneProduct.link}" alt="#" /></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></div></div></div>`;
                  document.getElementById('catprod').innerHTML = productHtml;
              }
              

          })}})}else{}});
  