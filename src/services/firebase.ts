import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCT_I2H0AYWynhKSI8h6FZfXSLuVpG3nBM",
  authDomain: "letmeask-513ff.firebaseapp.com",
  databaseURL: "https://letmeask-513ff-default-rtdb.firebaseio.com",
  projectId: "letmeask-513ff",
  storageBucket: "letmeask-513ff.appspot.com",
  messagingSenderId: "1050678591484",
  appId: "1:1050678591484:web:cb5d18c6cc3c130af1bc79",

  // apiKey: process.env.REDIRECT_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_BASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
