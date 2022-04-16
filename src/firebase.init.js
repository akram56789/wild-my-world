// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZge2FbNg2XbtMkFLPRSOCEyR1LSi9HHs",
  authDomain: "fahim-assignment-10.firebaseapp.com",
  projectId: "fahim-assignment-10",
  storageBucket: "fahim-assignment-10.appspot.com",
  messagingSenderId: "85814403358",
  appId: "1:85814403358:web:27fb2d49b67d734b12a90f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;