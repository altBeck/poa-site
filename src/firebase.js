// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFEL9WRBJD3ZZfI3ufwnPN6qZ4q5ygTxk",
  authDomain: "proof-africa.firebaseapp.com",
  projectId: "proof-africa",
  storageBucket: "proof-africa.appspot.com",
  messagingSenderId: "817764304753",
  appId: "1:817764304753:web:575106f8e0d42e7779d8d0",
  measurementId: "G-W6169PYVD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);