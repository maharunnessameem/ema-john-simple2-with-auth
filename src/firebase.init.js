// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2iWtDxF9o3xv5T6gr1oEryNFshGfelt8",
    authDomain: "ema-john-simple2-5e7ff.firebaseapp.com",
    projectId: "ema-john-simple2-5e7ff",
    storageBucket: "ema-john-simple2-5e7ff.appspot.com",
    messagingSenderId: "657706026370",
    appId: "1:657706026370:web:aee61ced7a47addc783b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;