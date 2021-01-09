/* -----------------------------------------------LOGOUT----------------------------------------------------*/
const exitBtn = document.getElementById('exitBtn');

exitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
   alert("Sign Out")
   setTimeout(function(){
       location.replace('index.html')
   },1000);
})
