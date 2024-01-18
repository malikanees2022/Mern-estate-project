// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cb664.firebaseapp.com",
  projectId: "mern-estate-cb664",
  storageBucket: "mern-estate-cb664.appspot.com",
  messagingSenderId: "922928851071",
  appId: "1:922928851071:web:9b3c5c9486b3653d8bf74a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);