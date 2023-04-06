// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhFLiTIAv7Qh3wFniVbD3LSCQoDnIMUFM",
  authDomain: "pro-motors-eb1e9.firebaseapp.com",
  projectId: "pro-motors-eb1e9",
  storageBucket: "pro-motors-eb1e9.appspot.com",
  messagingSenderId: "846727949989",
  appId: "1:846727949989:web:43df403ec4adb278aae74c",
  measurementId: "G-MDGKSCEDS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;