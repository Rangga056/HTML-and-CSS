// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-0ZH11yt0HpUghnL4vgCsyx6pORzZ9Kg",
  authDomain: "react-course-1-ad19e.firebaseapp.com",
  projectId: "react-course-1-ad19e",
  storageBucket: "react-course-1-ad19e.appspot.com",
  messagingSenderId: "753949102903",
  appId: "1:753949102903:web:3be197518e01a5fba300b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();