const firebaseConfig = {
  apiKey: "AIzaSyA6qJkwmRSTjUI6r6ZpThZyos7q_McdTIE",
  authDomain: "checklingo-a155e.firebaseapp.com",
  databaseURL: "https://checklingo-a155e-default-rtdb.firebaseio.com",
  projectId: "checklingo-a155e",
  storageBucket: "checklingo-a155e.firebasestorage.app",
  messagingSenderId: "278262951073",
  appId: "1:278262951073:web:bf137b29db1b40893f94e0"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
