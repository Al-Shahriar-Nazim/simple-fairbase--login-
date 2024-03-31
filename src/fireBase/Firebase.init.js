// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4-Gr_pBb75Z0V2wkIniS2JWjJ_K5iSiw",
  authDomain: "simple-firebase-51c93.firebaseapp.com",
  projectId: "simple-firebase-51c93",
  storageBucket: "simple-firebase-51c93.appspot.com",
  messagingSenderId: "290728042908",
  appId: "1:290728042908:web:cbc553e5e33b8bfb66e859",
  measurementId: "G-DB1K0LC43K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);
