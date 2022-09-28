import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoBO4KCXfbCvYyglYlfIm56t0WhTmtkUQ",
  authDomain: "react-chat-app-b4cf8.firebaseapp.com",
  projectId: "react-chat-app-b4cf8",
  storageBucket: "react-chat-app-b4cf8.appspot.com",
  messagingSenderId: "860582618474",
  appId: "1:860582618474:web:03aff838846140b59cf113"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()