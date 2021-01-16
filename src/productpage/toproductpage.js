
const userName = document.getElementById('userName');
$(document).on('click', '#product', function(e){
    
   

    //Displaying Product 
  var products = database.ref("Index/products/"+e.target.value)
  var counter = 0
  products.on("value", function(product){
    console.log(product.val());
          var productHtml = ``;
              counter = counter + 1;
              var eachOneProduct = product.val();
              var keys = Object.keys(eachOneProduct);
              var k = keys;
              var host = eachOneProduct.ürün_sahibi;
              var prod = eachOneProduct.kategori;
              const html = `<h3>${host}</h3>`;
                console.log(host);
      if(product.exists())
      {
        database.ref('ProductPage/Product/').set({
          ürün_sahibi: eachOneProduct.ürün_sahibi,
          kategori : eachOneProduct.kategori,
          link : eachOneProduct.link,
          ürün_ismi: eachOneProduct.ürün_ismi,
          ürün_tanitimi: eachOneProduct.ürün_tanitimi
        }).catch((error) =>{
          const ErrorCode = error.code;
          const ErrorMessage = error.message;
          console.log("Error Message : " + ErrorMessage + " ErrorCode : " + ErrorCode);
        })
        alert('Image added succesfully');
          }});
  
      
          setTimeout(function(){
            location.replace('productpage.html');
          },1000);
} );

