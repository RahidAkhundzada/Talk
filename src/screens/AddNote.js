import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
const ww = Dimensions.get('window').width;
const hh = Dimensions.get('window').height;

const AddNote = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Input}>
        <TextInput
          style={styles.inputTitle}
          placeholder="Title"
          placeholderTextColor="red"
          multiline={true}
        />
        <TextInput style={styles.InputText} placeholder="Add Note Here" />
      </View>
      <View style={styles.BtnStyle}>
        <TouchableOpacity
          style={styles.btnPlus}
          onPress={() => alert('Some days later we will fix Notepat for you')}>
          <Image source={require('../Images/plusAdd.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Input: {
    alignItems: 'center',
    flex: 6,
  },
  inputTitle: {
    width: '90%',
    height: '10%',
    borderColor: 'orange',
    borderWidth: 1,
    margin: '2%',
    borderRadius: 10,
  },
  InputText: {
    alignContent: 'center',
    width: '95%',
    height: '40%',
    borderColor: 'orange',
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
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
