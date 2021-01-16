
roottogetElement = database.ref('ProductPage/Product');
var html = ``;
roottogetElement.on('value', function(product){
    var eachOneProduct = product.val();
    var host = eachOneProduct.ürün_sahibi;
    html = `<h3>${host}</h3>`;
    document.getElementById('userName').innerHTML = html; document.getElementById('img').src = eachOneProduct.link; document.getElementById('content').innerHTML = eachOneProduct.ürün_tanitimi;
})
