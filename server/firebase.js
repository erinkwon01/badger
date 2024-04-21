// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyCSvqk5J4ZOg80MMnuJn7_oP9_-x_DMOUQ",
  authDomain: "badger-deb4f.firebaseapp.com",
  projectId: "badger-deb4f",
  storageBucket: "badger-deb4f.appspot.com",
  messagingSenderId: "282191234879",
  appId: "1:282191234879:web:8817e7805671579787b58a",
  measurementId: "G-3WTPN3VM10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
// const auth = getAuth(app);
const auth = ""
export {db, auth}