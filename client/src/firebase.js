import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCDtsW4ntjXEkhGHlMS21RzDwC_Y7AXxpw",
    authDomain: "baked-by-berry.firebaseapp.com",
    projectId: "baked-by-berry",
    storageBucket: "baked-by-berry.appspot.com",
    messagingSenderId: "501605542903",
    appId: "1:501605542903:web:6f045aee7a1af6e0a11cf2",
    measurementId: "G-PNN1PRRDD4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

const auth= firebase.auth();

export {
    auth,
    provider
};