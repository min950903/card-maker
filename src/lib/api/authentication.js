import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyDu7-xp2bubPp_JxvaiFpimAkZS6oa3ppE',
  authDomain: 'card-maker-fd892.firebaseapp.com',
  databaseURL: 'https://card-maker-fd892.firebaseio.com',
  projectId: 'card-maker-fd892',
  storageBucket: 'card-maker-fd892.appspot.com',
  messagingSenderId: '729957202333',
  appId: '1:729957202333:web:5a5e1352268994be111774',
  measurementId: 'G-7TLNMJRJFC',
};

const provider = new firebase.auth.GoogleAuthProvider();

export const googleSignPopup = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};

export const signGoogleRedirect = firebase.auth().signInWithRedirect(provider);

export const getRedirectResult = firebase
  .auth()
  .getRedirectResult()
  .then(function (result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    const user = result.user;
  })
  .catch(function (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
