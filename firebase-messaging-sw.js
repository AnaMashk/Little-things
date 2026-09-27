importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyBCkGtRJfBlTspGEdoGvHXq5Ig7pQDekTc",
  authDomain: "little-things-b7e6a.firebaseapp.com",
  projectId: "little-things-b7e6a",
  storageBucket: "little-things-b7e6a.firebasestorage.app",
  messagingSenderId: "130079571341",
  appId: "1:130079571341:web:4d9e1f27ca30c7c25251c4"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/icon512.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
