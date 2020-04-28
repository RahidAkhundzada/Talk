import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
} from 'react-native';
import firebase from 'firebase';
import CustomHeader from '../../Components/CustomHeader';
import NoteView from '../../Components/NoteView';

const Note = ({navigation}) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    var user = firebase.auth().currentUser;
    var DATA = [];
    var DATA2 = [];
    var UseriD = user.uid;
    firebase
      .database()
      .ref('Note/' + UseriD)
      .once('value')
      .then(function(snapshot) {
        DATA2.push(snapshot);
        snapshot.forEach(function(childSnapshot) {
          var childSnap = childSnapshot.val();
          DATA.push(childSnap);
        });
      })
      .then(function() {
        setData(DATA);
        setData2(DATA2);
      });
  }, [data]);

  return (
    <View style={styles.container}>
      <CustomHeader title="Note +" navigation={navigation} />
      <View style={{flex: 7}}>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <NoteView item={item} navigation={navigation} />
          )}
        />
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
