import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

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

const ref = doc(db, "website", "counter");

const snap = await getDoc(ref);

if (snap.exists()) {
    await updateDoc(ref, {
        views: increment(1)
    });

    document.getElementById("views").innerText =
        snap.data().views + 1;
}