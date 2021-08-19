import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8wTGTb-8YEpmcKl7vRESPmIdHLuByjek",
  authDomain: "modular-temple-285411.firebaseapp.com",
  projectId: "modular-temple-285411",
  storageBucket: "modular-temple-285411.appspot.com",
  messagingSenderId: "654071625801",
  appId: "1:654071625801:web:bf3dde667bd50db26d2798",
  measurementId: "G-Y7DPV5FJGH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
