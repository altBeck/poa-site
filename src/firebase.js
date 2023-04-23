// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpCrQbsPmoG5LMvr1OlXKqyouRCPoSgkc",
  authDomain: "poapool-site.firebaseapp.com",
  projectId: "poapool-site",
  storageBucket: "poapool-site.appspot.com",
  messagingSenderId: "34215386119",
  appId: "1:34215386119:web:565f6ab8a2458564e09ea2",
  measurementId: "G-E5PDGKCPSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);