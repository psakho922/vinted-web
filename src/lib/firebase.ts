import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArNQKODtDU3osw1BGX4QsVrRL_VbTmSes",
  authDomain: "bibani-boutique.firebaseapp.com",
  projectId: "bibani-boutique",
  storageBucket: "bibani-boutique.firebasestorage.app",
  messagingSenderId: "1086032956665",
  appId: "1:1086032956665:web:329aef28d73828dec46628",
  measurementId: "G-YM89Z17Y0L"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
