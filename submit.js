import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAteYbQ6bueS-YOIzhljaYRdSwbO4nF1I8",
  authDomain: "galaxyyarchive-28d15.firebaseapp.com",
  projectId: "galaxyyarchive-28d15",
  storageBucket: "galaxyyarchive-28d15.firebasestorage.app",
  messagingSenderId: "612747400340",
  appId: "1:612747400340:web:e62235825bf86b4875d081"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.submitAPK = async function () {

  try {

    await addDoc(collection(db, "Submissions"), {
      name: document.getElementById("name").value,
      version: document.getElementById("version").value,
      link: document.getElementById("link").value,
      note: document.getElementById("note").value,
      time: Date.now()
    });

    document.getElementById("status").innerHTML =
      "✅ Submitted successfully!";

    turnstile.reset();

    document.getElementById("name").value = "";
    document.getElementById("version").value = "";
    document.getElementById("link").value = "";
    document.getElementById("note").value = "";

    setTimeout(function () {
      location.reload();
    }, 1000);

  } catch (e) {

    document.getElementById("status").innerHTML =
      "❌ Error: " + e.message;

    console.log(e);

  }

};
