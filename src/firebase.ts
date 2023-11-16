import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAAJSaLuAu5xpDzlWTuzSeFxW-8ntFVivc",
    authDomain: "cryptonet-b53f8.firebaseapp.com",
    projectId: "cryptonet-b53f8",
    storageBucket: "cryptonet-b53f8.appspot.com",
    messagingSenderId: "1080699651535",
    appId: "1:1080699651535:web:46fafece2c820b38b9feba",
    measurementId: "G-RQ0MZ9T8S7"
  };

// Initialize Firebase
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
export const app = firebase.initializeApp(firebaseConfig);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = app.firestore();
