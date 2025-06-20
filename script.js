function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("Signed up successfully! Now log in."))
    .catch((error) => alert(error.message));
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Logged in!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => alert(error.message));
}
