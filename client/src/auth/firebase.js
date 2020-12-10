import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDE3NYs1nuTj1CUj5fr0Sowxnl-BjI0oJQ",
  authDomain: "shopkeep-e5c94.firebaseapp.com",
  databaseURL: "https://shopkeep-e5c94.firebaseio.com",
  projectId: "shopkeep-e5c94",
  storageBucket: "shopkeep-e5c94.appspot.com",
  messagingSenderId: "658405756806",
  appId: "1:658405756806:web:b212299d80a0220588e607",
  measurementId: "G-GKHDSNNGTV"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();