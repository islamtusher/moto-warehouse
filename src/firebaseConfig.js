// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtc_NNm0pu_YRha2EzAGhTbpuxfcc_yPc",
  authDomain: "moto-warehouse.firebaseapp.com",
  projectId: "moto-warehouse",
  storageBucket: "moto-warehouse.appspot.com",
  messagingSenderId: "761086256239",
  appId: "1:761086256239:web:13e25940587f281e3f199a"
};

// Initialize Firebase
const auth = getAuth(initializeApp(firebaseConfig))

export default auth;