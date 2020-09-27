import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4rj2eDYy9bNqD0VG8P-0Iju8-QKC7-Ck",
  authDomain: "twitter-clone-9080d.firebaseapp.com",
  databaseURL: "https://twitter-clone-9080d.firebaseio.com",
  projectId: "twitter-clone-9080d",
  storageBucket: "twitter-clone-9080d.appspot.com",
  messagingSenderId: "917897341936",
  appId: "1:917897341936:web:dab4c02fe1e4ccfad0cb35",
  measurementId: "G-EJ5QF2FFJ2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
