import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB0uz1FNQQKGrgvUjfvcDVEfgix-rc8X0I",
  authDomain: "react-notes-c1b54.firebaseapp.com",
  projectId: "react-notes-c1b54",
  storageBucket: "react-notes-c1b54.appspot.com",
  messagingSenderId: "852262661160",
  appId: "1:852262661160:web:31072fb276b79b0346191d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")