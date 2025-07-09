// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_6ztA7waQtL7hHBPSzL-r1PJ1GM8PxoM",
  authDomain: "login-auth-af4c1.firebaseapp.com",
  projectId: "login-auth-af4c1",
  storageBucket: "login-auth-af4c1.firebasestorage.app",
  messagingSenderId: "891381002364",
  appId: "1:891381002364:web:8c2609ac32060eac6cd9f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;