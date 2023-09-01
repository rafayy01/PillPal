// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getMessaging } from "firebase/messaging/sw";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAl7DEdxQNY9quUsaXrvxv4mBuXbQv0t14",
  authDomain: "healthapp-7f4fc.firebaseapp.com",
  projectId: "healthapp-7f4fc",
  storageBucket: "healthapp-7f4fc.appspot.com",
  messagingSenderId: "399352157271",
  appId: "1:399352157271:web:a226d9922e84fa057eff12",
  measurementId: "G-TBHV5639NN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const messaging = getMessaging(app); // Initialize messaging instance

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BH2V1I0GlzCnwb5iepq9phi0WLjPUrH2HsOnK77RDGP2pNfkfvTFhsaVM0Ns-TyQ9Avj7McpdgD48M9a9_UPLw0",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
          sessionStorage.setItem("fcmToken",currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}


requestPermission();
export { app, auth, messaging };
