// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0lvZj2QApHsrYcdHku-hPmDOZWjrM7y0",
  authDomain: "coffee-store-c62e5.firebaseapp.com",
  projectId: "coffee-store-c62e5",
  storageBucket: "coffee-store-c62e5.firebasestorage.app",
  messagingSenderId: "179861588252",
  appId: "1:179861588252:web:44fc192e575c07aff792d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;