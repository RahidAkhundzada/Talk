import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import firebase from 'firebase';
import CustomHeader from '../../Components/CustomHeader';

var user = firebase.auth().currentUser;

const Note = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomHeader title="Note +" navigation={navigation} />
      <View style={{flex: 7}}>
        <TextInput />
      </View>

      <View style={styles.BtnStyle}>
        <TouchableOpacity
          style={styles.btnPlus}
          onPress={() => navigation.navigate('Add Note')}>
          <Image source={require('../../Images/plus.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BtnStyle: {
    flex: 1,
    marginLeft: 30,
    flexDirection: 'row-reverse',
  },
  btnPlus: {
    height: 50,
    width: 50,
    flexDirection: 'row',
  },
});

export default Note;
