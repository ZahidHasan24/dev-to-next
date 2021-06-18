import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlUcdaQcktMSK8aRigLBOgfU_pdZ6Af9c",
  authDomain: "dev-to-next.firebaseapp.com",
  projectId: "dev-to-next",
  storageBucket: "dev-to-next.appspot.com",
  messagingSenderId: "856560286954",
  appId: "1:856560286954:web:2268efc506f9a82eb3eb93",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
