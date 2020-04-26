import React, {useEffect, useState} from 'react';
import {Text, View, Button, Image} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
//import {user} from '../../Extra/UserData';
import firebase from 'firebase';
const user = firebase.auth().currentUser;
const HomeScreen = ({navigation}) => {

  const imageView = () => {
    try {
      return {uri: user.photoURL};
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
