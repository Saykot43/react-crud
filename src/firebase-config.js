import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCdUCu8DyjVRKixIx4EJfE9zTpuoE9pi_8",
  authDomain: "crude-c3a40.firebaseapp.com",
  databaseURL: "https://crude-c3a40-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crude-c3a40",
  storageBucket: "crude-c3a40.appspot.com",
  messagingSenderId: "255643139133",
  appId: "1:255643139133:web:88d166ab82d395fddafe54"
});

const db = firebaseApp.firestore();
export default db;