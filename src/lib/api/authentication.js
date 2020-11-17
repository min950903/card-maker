import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
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
      const token = result.credential.accessToken;
      const user = result.user;
    })
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
};

export const signGoogleRedirect = firebase.auth().signInWithRedirect(provider);

export const getRedirectResult = firebase
  .auth()
  .getRedirectResult()
  .then(function (result) {
    if (result.credential) {
      const token = result.credential.accessToken;
    }
    const user = result.user;
  })
  .catch(function (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    // ...
  });
