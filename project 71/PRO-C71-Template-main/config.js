import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3FHHmKX8nuV8fC3P13M4w1nvNRlHLpu8",
  authDomain: "complaint-forum-d786c.firebaseapp.com",
  projectId: "complaint-forum-d786c",
  storageBucket: "complaint-forum-d786c.appspot.com",
  messagingSenderId: "818166946683",
  appId: "1:818166946683:web:a6c61adcafcdf6f15fbbde"
};

// Initialize Firebase




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


