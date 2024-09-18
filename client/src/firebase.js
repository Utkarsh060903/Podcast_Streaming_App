// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw4iThfbg4oFabmCnrFFack2yiHYB9fKs",
  authDomain: "podstream-fa29c.firebaseapp.com",
  projectId: "podstream-fa29c",
  storageBucket: "podstream-fa29c.appspot.com",
  messagingSenderId: "270193507464",
  appId: "1:270193507464:web:edb392ab691881a046f33d",
  measurementId: "G-N8XG2W6Z4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;