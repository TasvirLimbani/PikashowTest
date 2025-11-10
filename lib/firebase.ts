import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBlPSSimQlRnXMQhnJgmBZ5ppFwDnrtM2w",
  authDomain: "pokigames-v0.firebaseapp.com",
  projectId: "pokigames-v0",
  storageBucket: "pokigames-v0.firebasestorage.app",
  messagingSenderId: "256079896965",
  appId: "1:256079896965:web:022028ad01378904afa4ec",
  measurementId: "G-E1PS16H1S5"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
