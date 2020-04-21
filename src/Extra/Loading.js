import React, {useEffect, useState, useContext, createContext} from 'react';
import {Text, View, Button} from 'react-native';
import firebase from 'firebase';

const Loading = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState(null);

  var user = firebase.auth().currentUser;

  var DATA = [];
  firebase
    .database()
    .ref('Users')
    .once('value')
    .then(function(snapshot) {
      DATA.push(snapshot);
      snapshot.forEach(function(childSnapshot) {
        var childSnap = childSnapshot.val();
        //DATA.push(childSnap);
      });
    })
    .then(function() {
      setData(DATA);
      if (user != null) {
        setEmail(user.email);
      }
    });

  console.log(DATA);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default Loading;
