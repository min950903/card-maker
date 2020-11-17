import * as firebase from 'firebase';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
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
