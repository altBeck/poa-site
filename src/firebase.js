import firebase from 'firebase';
import "firebase/storage";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDpCrQbsPmoG5LMvr1OlXKqyouRCPoSgkc",
  authDomain: "poapool-site.firebaseapp.com",
  projectId: "poapool-site",
  storageBucket: "poapool-site.appspot.com",
  messagingSenderId: "34215386119",
  appId: "1:34215386119:web:565f6ab8a2458564e09ea2",
  measurementId: "G-E5PDGKCPSD"
});

const db = firebaseApp.firestore();

export { db };