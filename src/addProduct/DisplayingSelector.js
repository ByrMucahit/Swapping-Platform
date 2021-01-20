const selectElement = document.querySelector('#SelectedCategories');
const selectFilter = document.querySelector('#filterGen');


selectElement.addEventListener('change', (event) => {
    document.getElementById('emlakCat').style.display = "none";
    document.getElementById('vasıtaCat').style.display = "none";
    document.getElementById('ikinciEL').style.display = "none";
    document.getElementById('isMakineleri').style.display = "none";
  if(event.target.value === "Emlak"){
      document.getElementById('emlakCat').style.display = "block";
      console.log("Hello World");
      console.log(event.target.value);
  }
  if(event.target.value === "Vasıta"){
    document.getElementById('vasıtaCat').style.display = "block";
    console.log("Hello World");
    console.log(selectFilter);
}
if(event.target.value === "İkinci El Alışveriş"){
    document.getElementById('ikinciEL').style.display = "block";
    console.log("Hello World");
    console.log(event.target.value);
}

if(event.target.value === "İş Makineleri ve Sanayi"){
    document.getElementById('isMakineleri').style.display = "block";
    console.log("Hello World");
    console.log(event.target.value);
}


});

