import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = {};

const config = {
  apiKey: "AIzaSyCGMgtw0_Itu9g0t8fz3fuG-8bjFG0JtQA",
  authDomain: "waven-backend.firebaseapp.com",
  databaseURL: "https://waven-backend.firebaseio.com",
  projectId: "waven-backend",
  storageBucket: "waven-backend.appspot.com",
  messagingSenderId: "928982945551"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);
// firebase
//   .firestore()
//   .enablePersistence()
//   .catch(function(err) {
//     if (err.code == "failed-precondition") {
//       // Multiple tabs open, persistence can only be enabled
//       // in one tab at a a time.
//       // ...
//     } else if (err.code == "unimplemented") {
//       // The current browser does not support all of the
//       // features required to enable persistence
//       // ...
//     }
//   });

export default firebase;
