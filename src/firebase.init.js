// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBihMhuv3DAqRMp9cNoCQMv5hWsQPXgwPY",
  authDomain: "ema-john-acbbf.firebaseapp.com",
  projectId: "ema-john-acbbf",
  storageBucket: "ema-john-acbbf.appspot.com",
  messagingSenderId: "944507017298",
  appId: "1:944507017298:web:388657fd8b0b15eadd278b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth;