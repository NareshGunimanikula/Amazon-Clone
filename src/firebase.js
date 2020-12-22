// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB05qMhBctANrWr0R9UQ_AlNyALqdg29UE",
  authDomain: "clone-7d4d5.firebaseapp.com",
  projectId: "clone-7d4d5",
  storageBucket: "clone-7d4d5.appspot.com",
  messagingSenderId: "800060329961",
  appId: "1:800060329961:web:589a2644bf6903446b4578",
  measurementId: "G-31VGC6DFVL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
