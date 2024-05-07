// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi8nEt_HukpaDjmHa6IuETjfSvwf7dZoQ",
  authDomain: "netflixgpt-64e30.firebaseapp.com",
  projectId: "netflixgpt-64e30",
  storageBucket: "netflixgpt-64e30.appspot.com",
  messagingSenderId: "402594186805",
  appId: "1:402594186805:web:bb26b4c25ba976a209d37c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
