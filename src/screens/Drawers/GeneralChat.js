import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import firebase from 'firebase';
//import {createStackNavigator} from '@react-navigation/stack';
//import AsyncStorage from '@react-native-community/async-storage';
import {Keyboard} from 'react-native';

const fireconfig = {
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
  firebase.initializeApp(fireconfig);
}

const GeneralChat = ({navigation}) => {
  const [message, setMessage] = useState('Admin');
  const [messageCounter, setmessageCounter] = useState(1);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('admin@ChatApp.com');
  const [username, setusername] = useState('Admin');
  const flatList = useRef(null);
  const textinput = useRef(null);

  useEffect(() => {
    var user = firebase.auth().currentUser;

    var DATA = [];
    firebase
      .database()
      .ref('messages')
      .once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childSnap = childSnapshot.val();
          DATA.push(childSnap);
        });
      })
      .then(function() {
        setData(DATA);
        if (user != null) {
          setEmail(user.email);
          setusername(user.displayName);
        }
        return setInterval(() => {
          useEffect;
        }, 1000);
      });
  }, [data]);

  const SendMessage = () => {
    textinput.current.clear();

    setmessageCounter(messageCounter + 1);
    Keyboard.dismiss();
    firebase
      .database()
      .ref('messages')
      .push({User: `${username}`, message: ` : ${message}`});
  };
  const faltFunc = () => {
    flatList.current.scrollToEnd({animated: true});
  };

  return (
    <View style={styles.container}>
      <View style={styles.MessagesScreen}>
        <FlatList
          data={data}
          ref={flatList}
          keyExtractor={item => item.id}
          onContentSizeChange={faltFunc}
          onLayout={faltFunc}
          renderItem={({item}) => (
            <View>
              <ImageBackground
                source={require('../../Images/wp.png')}
                style={styles.image}>
                <Text style={styles.item}>
                  {item.User}
                  {item.message}
                </Text>
              </ImageBackground>
            </View>
          )}
        />
      </View>

      <View style={styles.message}>
        <TextInput
          placeholder="type"
          onChangeText={text => setMessage(text)}
          ref={textinput}
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.SendStyle} onPress={SendMessage}>
          <Text style={{fontSize: 22}}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default GeneralChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 30,
    color: 'red',
  },
  message: {
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 50,
    width: '80%',
    borderRadius: 10,
  },
  SendStyle: {
    borderWidth: 1,
    width: '20%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#25d366',
  },
  MessagesScreen: {
    flex: 7,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 1,
  },
  item: {
    fontFamily: 'Times New Roman',
    fontSize: 14,
    borderColor: 'green',
    borderRadius: 5,
    margin: 3,
  },
  title: {
    fontSize: 32,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
