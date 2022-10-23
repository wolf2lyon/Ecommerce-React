// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0F0anbM6VngJlawfmGKlnbSGGoymXyrs",
  authDomain: "backend37450-90cd7.firebaseapp.com",
  projectId: "backend37450-90cd7",
  storageBucket: "backend37450-90cd7.appspot.com",
  messagingSenderId: "417515272083",
  appId: "1:417515272083:web:91245978b00d7571e7da66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
