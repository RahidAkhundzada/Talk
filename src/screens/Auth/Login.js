import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import firebase from 'firebase';
import {Keyboard} from 'react-native';
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

const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const clickLogin = () => {
    Keyboard.dismiss();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('DrawerNavigation'))
      .catch(loginFail);
  };

  const loginFail = () => {
    alert('Username or Password is wrong');
  };
  const createUser = () => {
    navigation.navigate('Registr');
  };
  const passwordForgot = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(
        alert(`Password reset link sent to ${email}.Please check your mail`),
      );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
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
          placeholder="   Email"
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={styles.TextInputStyle}
          placeholder="   Password"
          defaultValue=""
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={passwordForgot} style={{marginTop: 10}}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={clickLogin}>
          <Text style={{color: 'white', fontSize: 16, fontStyle: 'italic'}}>
            Sign In
          </Text>
        </TouchableOpacity>
        <Image
          source={require('../../Images/arrow1.png')}
          style={{width: '47%', height: '35%', marginTop: 30}}
        />
        <TouchableOpacity onPress={createUser} style={{marginTop: 20}}>
          <Text style={{color: 'white', fontSize: 20, fontStyle: 'italic'}}>
            Don`t have an account? Create
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 20,
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
