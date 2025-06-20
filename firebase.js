// Your Firebase config here
const firebaseConfig = {
  apiKey: "YOUR-KEY",
  authDomain: "checklingo.firebaseapp.com",
  projectId: "checklingo",
  storageBucket: "checklingo.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "XXXXXXX"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
