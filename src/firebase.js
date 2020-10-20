import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWB-ENwyn8vuDv_oOsgCAmfZ-nLUU3Qq4",
  authDomain: "discord-clone-ash.firebaseapp.com",
  databaseURL: "https://discord-clone-ash.firebaseio.com",
  projectId: "discord-clone-ash",
  storageBucket: "discord-clone-ash.appspot.com",
  messagingSenderId: "807167673685",
  appId: "1:807167673685:web:80617df032009f4c5c1bdc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
