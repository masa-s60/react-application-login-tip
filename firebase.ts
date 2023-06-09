import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiuazDCwfUBxVx2K-NctW-nQhwh2atrmk",
  authDomain: "react-login-tip.firebaseapp.com",
  databaseURL: "https://react-login-tip-default-rtdb.firebaseio.com",
  projectId: "react-login-tip",
  storageBucket: "react-login-tip.appspot.com",
  messagingSenderId: "415237400445",
  appId: "1:415237400445:web:9f25772d8a20d44bab4e14",
  measurementId: "G-E5XMCQL45Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);