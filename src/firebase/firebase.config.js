// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAo75GOmeYqbU3rISlNmEyeTh3r9B0WVdw",
//   authDomain: "bd-hotel-24.firebaseapp.com",
//   projectId: "bd-hotel-24",
//   storageBucket: "bd-hotel-24.appspot.com", 
//   messagingSenderId: "156306018532",
//   appId: "1:156306018532:web:d895d75ce30c6bbbd75cf1"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;