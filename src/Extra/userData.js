import {useState} from 'react';
import firebase from 'firebase';


const User = firebase.auth().onAuthStateChanged(function(user) {
  return user;
});

export default User;
