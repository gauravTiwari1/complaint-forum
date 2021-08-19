import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 
  apiKey: "AIzaSyCdsTxaBHgt-Oev1HLiVXUSUjRZmvqcg4k",
  authDomain: "complaint-forum-79353.firebaseapp.com",
  projectId: "complaint-forum-79353",
  storageBucket: "complaint-forum-79353.appspot.com",
  messagingSenderId: "669326399986",
  appId: "1:669326399986:web:62c2bfa70b0f11c1c3b36b",
  measurementId: "G-WYYFH1J9Q2"
};
// Initialize Firebase


  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

