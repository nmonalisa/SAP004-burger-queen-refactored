import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDyrUCmqdk0lrNR79hWfYIpCU8r7yERq3A",
  authDomain: "burguer-queen2-36606.firebaseapp.com",
  databaseURL: "https://burguer-queen2-36606.firebaseio.com",
  projectId: "burguer-queen2-36606",
  storageBucket: "burguer-queen2-36606.appspot.com",
  messagingSenderId: "100179884051",
  appId: "1:100179884051:web:793673b39639d1399427e6"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { firebase, db, auth }