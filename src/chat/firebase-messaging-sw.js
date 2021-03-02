importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');


var firebaseConfig = {
  apiKey: "AIzaSyCrOMcnXkdIOIFsF2kJyaOihHCCHmlXW_8",
  authDomain: "swapping-b3fa9.firebaseapp.com",
  projectId: "swapping-b3fa9",
  storageBucket: "swapping-b3fa9.appspot.com",
  messagingSenderId: "339189154054",
  appId: "1:339189154054:web:50925823bd6c52d96f9e87",
  measurementId: "G-JBYKXFH3SC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Mesajınız Bulunmakta.';
    const notificationOptions = {
      body: payload.data.message,
      icon: payload.data.icon
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  