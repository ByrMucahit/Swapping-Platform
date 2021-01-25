const startChat = document.getElementById('startChat');


startChat.addEventListener('click',function(){
    console.log("Hello World");

    document.getElementById('chatPanel').removeAttribute('style');
    document.getElementById('divStart').setAttribute('style', 'display:none');
})