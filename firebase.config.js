// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5vwsMD6M_jhoMXMm4YQYJWoMoBz6RILA",
    authDomain: "taskflowportal.firebaseapp.com",
    projectId: "taskflowportal",
    storageBucket: "taskflowportal.appspot.com",
    messagingSenderId: "114279544521",
    appId: "1:114279544521:web:e793807f607c41f6d5ff18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;