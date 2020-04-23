import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import firebase from 'firebase';
import CheckBox from '@react-native-community/checkbox';

const config = {
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
  firebase.initializeApp(config);
}

const Registr = ({navigation}) => {
  const [userName, setuserName] = useState(null);
  const [Name, setName] = useState(null);
  const [surName, setSurName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [check, setCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const customID = Math.random().toFixed(15) * 987654321000000000;

  const signUp = async () => {
    setIsLoading(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => alert('Account succefully created'))
      .then(UserList())
      .then(() => {
        setIsLoading(false);
        navigation.navigate('Login');
      })
      .catch(Error => {
        setIsLoading(false);
        alert('error', Error);

        if (password.length < 7) {
          alert('Password must be at least 7 Characters');
        } else if (
          email === '' ||
          Name === '' ||
          surName === '' ||
          userName === '' ||
          password === ''
        ) {
          alert('Fill all');
        } else {
          alert('This email is already registred');
        }
      });

    setEmail('');
    setName('');
    setPassword('');
    setSurName('');
    setuserName('');
  };

  const UserList = () => {
    const ref = firebase
      .database()
      .ref('Users')
      .push({
        ID: `${customID}`,
        Email: `${email.toLowerCase()}`,
        Username: `${userName}`,
        Name: `${Name}`,
        surName: `${surName}`,
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageStyle}>
        <Image
          source={require('../../Images/ChatMe.png')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={styles.inputStyle}>
        <TextInput
          style={styles.TextInputStyle}
          defaultValue=""
          placeholder="Username"
          onChangeText={userName => setuserName(userName)}
        />
        <TextInput
          style={styles.TextInputStyle}
          placeholder="Name"
          defaultValue=""
          onChangeText={Name => setName(Name)}
        />
        <TextInput
          style={styles.TextInputStyle}
          placeholder="Surname"
          defaultValue=""
          onChangeText={surName => setSurName(surName)}
        />
        <TextInput
          style={styles.TextInputStyle}
          placeholder="E-mail"
          defaultValue=""
          autoCapitalize="none"
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={styles.TextInputStyle}
          placeholder="Password"
          defaultValue=""
          onChangeText={password => setPassword(password)}
          secureTextEntry={!check}
        />
        <Text>Show</Text>
        <CheckBox
          onChange={() => {
            if (check === true) {
              setCheck(false);
            } else {
              setCheck(true);
            }
          }}
          value={check}
        />
        <ActivityIndicator size="large" color="#0000ff" animating={isLoading} />
        <TouchableOpacity style={styles.btn} onPress={signUp}>
          <Text style={{color: 'white', fontSize: 16, fontStyle: 'italic'}}>
            Sing Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsLoading(false);
            navigation.navigate('Login');
          }}
          style={{marginTop: 20}}>
          <Text style={{color: 'white', fontSize: 20, fontStyle: 'italic'}}>
            I have an account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Registr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    flex: 2,
  },
  inputStyle: {
    flex: 4,
    padding: 40,
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  TextInputStyle: {
    width: 300,
    height: 40,
    borderColor: 'white',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  btn: {
    height: '15%',
    width: '45%',
    borderWidth: 2,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderColor: 'white',
  },
  forgotPassword: {
    color: 'white',
    fontSize: 10,
    fontStyle: 'italic',
    justifyContent: 'flex-end',
  },
});
