// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzaKT7QmrL9dAG1SSuN8wU1ADVM_ro-1A",
  authDomain: "netflixgpt-52c11.firebaseapp.com",
  projectId: "netflixgpt-52c11",
  storageBucket: "netflixgpt-52c11.firebasestorage.app",
  messagingSenderId: "1005325283320",
  appId: "1:1005325283320:web:eadf4426c62c0ef453f00d",
  measurementId: "G-N0RZGBYBLB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
