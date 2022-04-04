export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdLvnVhhCsGzGsU8YMtwWBeMX4QmuC_Og",
  authDomain: "ca4-carsales-48e44.firebaseapp.com",
  projectId: "ca4-carsales-48e44",
  storageBucket: "ca4-carsales-48e44.appspot.com",
  messagingSenderId: "471810924257",
  appId: "1:471810924257:web:972c55f39ed77abab321a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);