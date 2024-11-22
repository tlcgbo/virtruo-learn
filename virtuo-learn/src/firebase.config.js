// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhOs-cd84PMs_utgxedWOp0VONlFYbJPk",
  authDomain: "virtuo-learn.firebaseapp.com",
  projectId: "virtuo-learn",
  storageBucket: "virtuo-learn.firebasestorage.app",
  messagingSenderId: "904967590840",
  appId: "1:904967590840:web:5a1dc4369fadb4d476f54d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;