import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBsSK9Zt4Jv051v0SJXlKTDawRI5kfp6Ys",
    authDomain: "mychatbackend.firebaseapp.com",
    databaseURL: "https://mychatbackend.firebaseio.com/",
    projectId: "mychatbackend",
    storageBucket: "mychatbackend.appspot.com",
    messagingSenderId: "596156726395"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
