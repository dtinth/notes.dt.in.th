import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyApqyhtZsCQig18HWLHjiFbL-cl-Fo6TR4",
  authDomain: "dtinth-notes.firebaseapp.com",
  projectId: "dtinth-notes",
  storageBucket: "dtinth-notes.appspot.com",
  messagingSenderId: "384108821542",
  appId: "1:384108821542:web:3dd7e07a6c062a9ede3ae7",
  measurementId: "G-ZYXHWNN9SB",
}

export const app = initializeApp(firebaseConfig)
