// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl-JYAwGYhh6hbK75WFmuGk0qy0tFOcOg",
  authDomain: "ctt-sis-hust.firebaseapp.com",
  projectId: "ctt-sis-hust",
  storageBucket: "ctt-sis-hust.appspot.com",
  messagingSenderId: "15346295070",
  appId: "1:15346295070:web:93d75aa9fa3d09b6f4a90f",
  measurementId: "G-0NE78QEBWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);