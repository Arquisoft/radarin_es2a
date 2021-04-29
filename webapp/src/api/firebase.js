import firebase from "firebase/app"
import firestore from "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyC3VpT1Os2uTZT4YzeT_6a-Z8Zs1sG468Q",
    authDomain: "radarin-85e68.firebaseapp.com",
    projectId: "radarin-85e68",
    storageBucket: "radarin-85e68.appspot.com",
    messagingSenderId: "472640936558",
    appId: "1:472640936558:web:ee5a47eef7163078baa47f",
    measurementId: "G-BBCNXDYNVJ"
  };
  //Inicializar firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
