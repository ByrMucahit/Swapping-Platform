const startChat = document.getElementById('startChat');


startChat.addEventListener('click',function(){
    console.log("Hello World");

    document.getElementById('chatPanel').removeAttribute('style');
    document.getElementById('divStart').setAttribute('style', 'display:none');

    hideChatList();
})
//////////////////////////////////////////////

const showChatList = document.getElementById('showChatList');

showChatList.addEventListener('click', function(){
    document.getElementById('side-1').classList.remove('d-none', 'd-md-block');
    document.getElementById('side-2').classList.add('d-none');
})

function hideChatList(){
    document.getElementById('side-1').classList.add('d-none', 'd-md-block');
    document.getElementById('side-2').classList.remove('d-none');
}