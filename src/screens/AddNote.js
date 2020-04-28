import React, {useState} from 'react';
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
import firebase from 'firebase';
const ww = Dimensions.get('window').width;
const hh = Dimensions.get('window').height;



const AddNote = ({navigation}) => {
  const [titleText, setTitleText] = useState('');
  const [noteText, setNoteText] = useState('');

  const PushNote = async () => {
    var user = firebase.auth().currentUser;
    let date = new Date();
    var userId = await user.uid;
    firebase
      .database()
      .ref('Note/' + userId)
      .push({
        Title: `${titleText}`,
        Note: `${noteText}`,
        CreatedDay:
          date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear(),
        CreatedTime: date.getHours() + '.' + date.getMinutes(),
      })
      .then(navigation.navigate('Note'));
  };

  const TitleText = text => {
    setTitleText(text);
  };
  const NoteText = text => {
    setNoteText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Input}>
        <TextInput
          style={styles.inputTitle}
          placeholder="Title"
          placeholderTextColor="red"
          multiline={true}
          onChangeText={text => TitleText(text)}
        />
        <TextInput
          multiline={true}
          style={styles.InputText}
          placeholder="Add Note Here"
          onChangeText={text => NoteText(text)}
        />
      </View>
      <View style={styles.BtnStyle}>
        <TouchableOpacity style={styles.btnPlus} onPress={() => PushNote()}>
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
