// Button Query Selector
const profile = document.getElementById('profilBtn');
const profileExit = document.getElementById('exitBtn');

//Div Query Selector
const accountDetails = document.getElementById('userName');

profile.addEventListener('click', (e) => {
   e.preventDefault();

}) ;

profileExit.addEventListener('click', (e) => {
   auth.signOut();
   alert("Sign Out")
   setTimeout(function(){
       location.replace('index.html')
   },1000);
})
    


auth.onAuthStateChanged(function (user) {
    
   if (user) {

       var user = firebase.auth().currentUser;
       
       if (user != null) {
           const html = `<h3>${user.email}</h3>`;

           accountDetails.innerHTML = html;




          
          
           }
       
       
   } else {


   }
}
)

