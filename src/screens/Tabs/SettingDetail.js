import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import firebase from 'firebase';

var user = firebase.auth().currentUser;

const SettingDetail = ({navigation}) => {
  const accountDelate = () => {
    user
      .delete()
      .then(alert('Account Delated'))
      .then(() => navigation.navigate('Login'))
      .catch(alert('Some error accour'))
  };
  return (
    <View>
      <Button title="Delate Account" onPress={() => accountDelate()} />
    </View>
  );
};

export default SettingDetail;
