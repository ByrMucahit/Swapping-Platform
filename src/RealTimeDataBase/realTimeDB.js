//import add  from "../RealTimeDataBase/add.js"
// GETTING ELEMENT
const username = document.getElementById('userName');
email = document.getElementById('email');
uyeOlBtn = document.getElementById('uyeOlBtn')



const database = firebase.database();
rootRef = database.ref('products');

//ADD DATA
uyeOlBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Name: "+ username.value + " Email :"+email.value);
    console.log('Click is ready');
    const autoId = rootRef.push().key
    rootRef.child(123123).set({
        username: username.value,
        email: email.value,
        userid: autoId
    });
});


/*
// UPDATE DATA
updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newData = {
        name : username.value,
        email : email.value

    };
    const updates = {};
    updates['/users'+ userId.value] = newData;
    database.ref().update(updates);
});*/


/*
//Remove Data
removeBtn.addEventListener('click', e => {
    e.preventDefault();
    rootRef.child(userId.value).remove()
    .then(() => {
        window.alert('User removed from database !');
    })
    .catch((error) => {
        const errorMessage = error.message;
        const errorCode = error.Code;
        console("Error Message : "+errorMessage+" Error Code : "+errorCode);
    })
})*/


/*
database.ref('/communuties').orderByValue().on('value', snapshot => {
   console.log(snapshot.val()); 
});*/