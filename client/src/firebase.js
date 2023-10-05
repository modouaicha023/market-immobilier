// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-project-bdb63.firebaseapp.com",
    projectId: "mern-project-bdb63",
    storageBucket: "mern-project-bdb63.appspot.com",
    messagingSenderId: "616315960028",
    appId: "1:616315960028:web:0d9ab6ae5b478d73081219"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);