import firebase from 'firebase';

const fireconfig = {
  apiKey: 'AIzaSyA_Uup35k_gYb5pjY93_Wqzch8vSXPjDLc',
  authDomain: 'login-db311.firebaseapp.com',
  databaseURL: 'https://login-db311.firebaseio.com',
  projectId: 'login-db311',
  storageBucket: 'login-db311.appspot.com',
  messagingSenderId: '910989883111',
  appId: '1:910989883111:web:39507e63295fbfc6629442',
  measurementId: 'G-LCMFCVZXX0',
};

if (!firebase.apps.length) {
  firebase.initializeApp(fireconfig);
}

export const FB = firebase;
export const User = firebase.auth().currentUser;

export var USER = firebase.auth().onAuthStateChanged(function(user) {
  USER = user;
});
