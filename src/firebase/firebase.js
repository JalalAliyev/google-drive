import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage'

const app = firebase.initializeApp({
  apiKey: "AIzaSyCvU-Q4JVgadxk1Psz6XRp_JTDJPwxfp_w",
  authDomain: "drive-clone-644be.firebaseapp.com",
  projectId: "drive-clone-644be",
  storageBucket: "drive-clone-644be.appspot.com",
  messagingSenderId: "500368681615",
  appId: "1:500368681615:web:7e624e6ba6943a93d31efa",
  measurementId: "G-045P1ZEKV5",
});

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return {id: doc.id, ...doc.data()}
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
};

export const storage = app.storage()
export const auth = app.auth();
export default app;