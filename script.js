const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Signed up! Now log in.");
    })
    .catch((err) => alert(err.message));
};

const login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((err) => alert(err.message));
};
