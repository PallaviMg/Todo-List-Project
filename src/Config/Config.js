import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzwEo_IfEpf4lYR2GpoxxJzXKD1y23lL8",
  authDomain: "todo-list-50c9f.firebaseapp.com",
  projectId: "todo-list-50c9f",
  storageBucket: "todo-list-50c9f.appspot.com",
  messagingSenderId: "855695841600",
  appId: "1:855695841600:web:6983eb0d2ef78d98eb82a5",
  measurementId: "G-WDYWPHDT2E"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };