import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAPBTNokTzDVM0YWfyhJjfbwvmJ0607-DY",
    authDomain: "shop-app-8dd5f.firebaseapp.com",
    databaseURL: "https://shop-app-8dd5f.firebaseio.com",
    projectId: "shop-app-8dd5f",
    storageBucket: "shop-app-8dd5f.appspot.com",
    messagingSenderId: "1025978666184",
    appId: "1:1025978666184:web:2c4136a6d77551cf6329fd",
    measurementId: "G-2R63RHGYF8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;