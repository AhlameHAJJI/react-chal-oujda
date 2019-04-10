import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB-ZD7z-JDuj8xFYjNyfqya1-jw_YehJII",
  authDomain: "react-chal-oujda.firebaseapp.com",
  databaseURL: "https://react-chal-oujda.firebaseio.com",
  projectId: "react-chal-oujda",
  storageBucket: "react-chal-oujda.appspot.com",
  messagingSenderId: "935185522041"
};
firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;
