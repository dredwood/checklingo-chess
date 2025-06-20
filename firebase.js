const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Create user XP entry if it doesn't exist
auth.onAuthStateChanged(user => {
  if (user) {
    const userRef = db.collection("users").doc(user.uid);
    userRef.get().then(doc => {
      if (!doc.exists) {
        userRef.set({ xp: 0 });
      }
    });
  }
});
