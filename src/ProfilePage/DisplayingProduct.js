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
            productHtml += `<div class="col-md-4 col-sm-6"><div class="small-box-c"><div class="small-img-b"><a href="#" ><button type="button" onclick="removed(this.id)" class="close" id="${eachOneProduct.ürün_ismi}"  aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button><img  id="s" alt="#" src="${eachOneProduct.link}" style="height:100px; height:200px;"/></a></div><div class="dit-t clearfix"><div class="left-ti"><p>${eachOneProduct.ürün_sahibi}</p><br><h4>${eachOneProduct.ürün_ismi}</h4><p><span>${eachOneProduct.kategori}</span></p></div><a href="#" tabindex= "0"><button id="product" value="${eachOneProduct.ürün_ismi}">"Urune Git"</button></a></div></div></div></div>`
            
            document.getElementById('productlist').innerHTML = productHtml;
            document.getElementById('productCount').innerHTML = counter;
        })}})}else{}});
