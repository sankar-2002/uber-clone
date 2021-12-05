// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPiiRrmgIj0wC7bwCn76uH_JyZDnbh_rk",
  authDomain: "uber-clone-84496.firebaseapp.com",
  projectId: "uber-clone-84496",
  storageBucket: "uber-clone-84496.appspot.com",
  messagingSenderId: "445836246029",
  appId: "1:445836246029:web:f20aa582cb497e95952944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}