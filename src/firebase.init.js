// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6_LTbw66iTCUYTRCFH1dbZnOqRoaWuvA",
  authDomain: "hasan-hyperlink.firebaseapp.com",
  projectId: "hasan-hyperlink",
  storageBucket: "hasan-hyperlink.appspot.com",
  messagingSenderId: "169355343924",
  appId: "1:169355343924:web:861bcc531e995d6698f261",
};

// Initialize Firebase
const auth = getAuth(initializeApp(firebaseConfig));
export default auth;
