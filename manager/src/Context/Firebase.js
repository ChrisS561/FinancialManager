import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getDatabase } from "firebase/database"


const app = firebase.initializeApp({
    apiKey: "AIzaSyBZJxCsFSRYKDPd2Y5Rlq1-xIocNx0YXBc",
  authDomain: "finacialmanager-242.firebaseapp.com",
  projectId: "finacialmanager-242",
  storageBucket: "finacialmanager-242.appspot.com",
  messagingSenderId: "853156346984",
  appId: "1:853156346984:web:5aa8c19b3f86762a1b0fdd",
  measurementId: "G-PPBJKKZ8N2"
});

export const auth = app.auth();
export default app;

