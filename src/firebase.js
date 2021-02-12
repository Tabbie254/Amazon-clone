import firebase from 'firebase'  
  
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Q0p2eJlgSHsjr6vPrX1XgFUbKttiIlw",
  authDomain: "clone-fae31.firebaseapp.com",
  projectId: "clone-fae31",
  storageBucket: "clone-fae31.appspot.com",
  messagingSenderId: "358509027141",
  appId: "1:358509027141:web:100a3ac072bb896c85282c",
  measurementId: "G-7NBM4XHHX2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};