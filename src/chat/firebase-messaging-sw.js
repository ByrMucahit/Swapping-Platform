importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');


var firebaseConfig = {
    apiKey: "AIzaSyCUmQss56K5QYAqfKok6djLkv2mXPkK-6A",
    authDomain: "swappingplatform.firebaseapp.com",
    databaseURL: "https://swappingplatform-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "swappingplatform",
    storageBucket: "swappingplatform.appspot.com",
    messagingSenderId: "53688904272",
    appId: "1:53688904272:web:1100122b7857b1f6687f55",
    measurementId: "G-E80JGRLSHN"
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
  