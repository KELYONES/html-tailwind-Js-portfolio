// /js/signup.js
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const form = document.getElementById("signupForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorMsg.classList.add("hidden");

  const email = form.email.value.trim();
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (password !== confirmPassword) {
    errorMsg.textContent = "⚠️ Passwords do not match.";
    errorMsg.classList.remove("hidden");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("✅ Account created successfully!");
    window.location.href = "login.html";
  } catch (error) {
    errorMsg.textContent = `❌ ${error.message}`;
    errorMsg.classList.remove("hidden");
  }
});
