import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAuQx_u1RghJLvxaGr5EdJnjY-6sDLCtYg",
    authDomain: "book-santa-dc7e2.firebaseapp.com",
    databaseURL: "https://book-santa-dc7e2-default-rtdb.firebaseio.com",
    projectId: "book-santa-dc7e2",
    storageBucket: "book-santa-dc7e2.appspot.com",
    messagingSenderId: "47101489052",
    appId: "1:47101489052:web:087be74e4a664bf5e1a259"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();