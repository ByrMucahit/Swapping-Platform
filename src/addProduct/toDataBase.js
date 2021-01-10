// Get Elements

const category = document.getElementById('CategoriSelectedOption');
const addBtn = document.getElementById('addProductBtn')
const productDescribe = document.getElementById('subject');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var text= category.options[category.selectedIndex].text;
    console.log('this is category : '+ text);
    console.log("Describe Of productDescribe => " + productDescribe.value);
})