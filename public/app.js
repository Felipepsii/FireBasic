
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwn7UwlBR0a9z6q-IUFsIEZyKYwWPO_7k",
    authDomain: "fire-basic-dcf84.firebaseapp.com",
    projectId: "fire-basic-dcf84",
    storageBucket: "fire-basic-dcf84.appspot.com",
    messagingSenderId: "45275462255",
    appId: "1:45275462255:web:76cc570b59febe70996b9a",
    measurementId: "G-YE2GX0B45B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// Get IDs

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

signInBtn.onclick = () => {
    signInWithPopup(auth, provider)
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
}

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        //signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayname} !</h3>`

    } else {
        //not signed in

    }


});




