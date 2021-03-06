import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';
import CustomHeader from '../../Components/CustomHeader';
const ww = Dimensions.get('window').width;
const hh = Dimensions.get('window').height;
var User = firebase.auth().onAuthStateChanged(function(user) {
  User = user;
});

const Profile = ({navigation}) => {
  const [Name, setName] = useState(User.displayName);
  const [photo, setPhoto] = useState(User.photoURL);
  const [email, setEmail] = useState(User.email);
  const [photo1, setphoto1] = useState();

  // const result1 = data.find(({Email}) => Email === email);
  //       setresult(result1);
  //       console.log(result1);

  const UploadImage = () => {
    firebase
      .storage()
      .ref('Chatme/' + User.uid)
      .put(photo);
  };

  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const GetPic = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setphoto1(source);
      }
    });
  };

  const UpdateProfile = () => {
    User.updateProfile({
      displayName: Name,
      photoURL: photo,
    })
      .then(function() {
        alert('Update successful.');
      })
      .catch(function(error) {
        alert('An error happened.');
      });
  };

  return (
    <View style={styles.container}>
      <CustomHeader title={email} navigation={navigation} />
      <View>
        <Image
          source={{uri: photo}}
          style={{height: ww / 3, width: ww / 3, marginLeft: 10, margin: 10}}
        />
        <Image source={photo1} style={{height: 100, width: 100}} />

        <Button title="Change Profile Image" onPress={() => GetPic()} />
        <Text style={{margin: 10, color: 'red'}}>Username:</Text>
        <TextInput
          style={styles.TextInputStyle}
          value={Name}
          onChangeText={name => setName(name)}
        />
        <Text style={{margin: 10, color: 'red'}}>Photo Url:</Text>
        <TextInput
          style={styles.TextInputStyle}
          value={photo}
          onChangeText={name => setPhoto(name)}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          title="Save"
          onPress={() => UpdateProfile()}
          style={styles.btnStyl}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnStyl: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInputStyle: {
    width: 300,
    height: 40,
    borderColor: 'black',
    borderBottomWidth: 1,
    margin: 10,
  },
});
