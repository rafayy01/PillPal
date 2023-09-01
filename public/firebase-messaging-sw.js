
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

const firebaseConfig = {
  // Your Firebase configuration here
  apiKey: "AIzaSyAl7DEdxQNY9quUsaXrvxv4mBuXbQv0t14",
  authDomain: "healthapp-7f4fc.firebaseapp.com",
  projectId: "healthapp-7f4fc",
  storageBucket: "healthapp-7f4fc.appspot.com",
  messagingSenderId: "399352157271",
  appId: "1:399352157271:web:a226d9922e84fa057eff12",
  measurementId: "G-TBHV5639NN",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  // Customize how you handle the background message here
  // For example, you can use the `self.registration.showNotification` method
  self.registration.showNotification(payload.data.Title, {
    body: payload.data.Message,
  });
});
// Handle foreground messages
self.addEventListener('push', event => {
  const payload = event.data.json();

  // Customize how you handle the foreground message here
  self.registration.showNotification(payload.data.Title, {
    body: payload.data.Message,
  });
});