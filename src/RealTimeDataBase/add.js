// DATABASE REFERENCES
const database = firebase.database();
/*rootRef = database.ref('users');

//ADDING PROCESSING
export default function add(name, email){
    const autoId = rootRef.push().key
    rootRef.child(autoId.value).set({
        user_name: username,
        email: email
    }).then(() => {
        window.alert("User register has been successfully");
    }).catch(error => {
        const errorMessage = error.message;
        const errorCode = error.code;
        console.log("Error Message : "+ errorMessage + " Error Code : "+errorCode);
        return false;
    })


    return true;
}*/