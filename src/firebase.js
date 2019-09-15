import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmPnpNCVv4jlXjb_9cVEjh6bnh8Zv3TZM",
  authDomain: "comentaki-py.firebaseapp.com",
  databaseURL: "https://comentaki-py.firebaseio.com",
  projectId: "comentaki-py",
  storageBucket: "",
  messagingSenderId: "260018442219",
  appId: "1:260018442219:web:643a63d852a0a90d42d3ae"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
