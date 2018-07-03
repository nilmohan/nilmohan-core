import * as firebase from 'firebase';

/*
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
*/
var config = {
  apiKey: "AIzaSyAc_ug_bqQn77WXaayKrLa_ocbxEIS_Xao",
  authDomain: "testing-54e0d.firebaseapp.com",
  databaseURL: "https://testing-54e0d.firebaseio.com",
  projectId: "testing-54e0d",
  storageBucket: "",
  messagingSenderId: "268765048986"
};

firebase.initializeApp(config);


const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

