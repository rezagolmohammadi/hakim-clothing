import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB_32KK6xaAuPFhzCyIuj7qQMPISrx_OEk",
  authDomain: "hakim-clothing-db.firebaseapp.com",
  databaseURL: "https://hakim-clothing-db.firebaseio.com",
  projectId: "hakim-clothing-db",
  storageBucket: "",
  messagingSenderId: "433899097362",
  appId: "1:433899097362:web:bf4d2bd4e72d4b47"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;