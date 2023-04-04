
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCR61yl-TU0uNmjHj9HwQkhNKUKKOkb0gE",
  authDomain: "tiktok---jornadadev-78a81.firebaseapp.com",
  projectId: "tiktok---jornadadev-78a81",
  storageBucket: "tiktok---jornadadev-78a81.appspot.com",
  messagingSenderId: "207985446162",
  appId: "1:207985446162:web:db611495aa00aeea6577cb"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db