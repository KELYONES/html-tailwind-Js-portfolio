// /js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB433CjEYeAy7KVkqCFM6H2GeMcTTmhJpY",
  authDomain: "veritas-39f21.firebaseapp.com",
  projectId: "veritas-39f21",
  storageBucket: "veritas-39f21.appspot.com",
  messagingSenderId: "938004758888",
  appId: "1:938004758888:web:ccda2e11d5eafdc11296dd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
