import React, {useEffect, useState} from 'react';
import {Text, View, Button, Image} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
//import {user} from '../../Extra/UserData';
import firebase from 'firebase';
const user = firebase.auth().currentUser;

var userPhoto;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    userPhoto = user.photoURL;
  }
});

const HomeScreen = ({navigation}) => {

  const imageView = () => {
    try {
      return {uri: userPhoto};
    } catch (error) {
      return require('../../Images/user1.png');
    }
  };

  //user.photoURL
  return (
    <View>
      <CustomHeader
        isHome="true"
        title="Home"
        img={imageView()}
        navigation={navigation}
      />
      <Text>Welcome </Text>
      <Button title="opendrawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default HomeScreen;
