import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';
import firebase from 'firebase';
import CustomHeader from '../../Components/CustomHeader';

const user = firebase.auth().currentUser;

const Users = ({navigation}) => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState(null);
  const [id, setId] = useState(1);
  const [data2, setdata2] = useState([]);
  const [dataSource, setdataSource] = useState([]);
  const [text, setText] = useState('');
  const flatList = useRef(null);

  useEffect(() => {
    var DATA = [];
    var DATA2 = [];
    firebase
      .database()
      .ref('Users')
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
        setdata2(DATA2);
        if (user != null) {
          setEmail(user.email);
        }
      })
      .then(SearchbyName(text));
  }, [SearchbyName, data, text]);

  const SearchbyName = useCallback(text => {
    const newData = data.filter(item => {
      const itemData = item.Name ? item.Name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setdataSource(newData);
    setText(text);
  });
 

  const TalkOnetoOne = () => {
    const result = data.find(({Email}) => Email === email);
    result.set = user.photoURL;
    console.log(result);
  };

  return (
    <SafeAreaView>
      <CustomHeader isHome="false" title="Users" navigation={navigation} />
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => SearchbyName(text)}
        value={text}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />
      <Button title="ok" onPress={() => TalkOnetoOne()} />
      <FlatList
        data={dataSource}
        ref={flatList}
        keyExtractor={(item, index) => index.toString()}
        // onContentSizeChange={faltFunc}
        // onLayout={faltFunc}
        renderItem={({item, index}) => (
          <ScrollView>
            <View style={{flex: 1, flexDirection: 'row'}} key={item.ID}>
              <View style={{flex: 1}}>
                <Image
                  style={{height: 50, width: 50, borderRadius: 25, margin: 10}}
                  source={{
                    uri:
                      'https://firebasestorage.googleapis.com/v0/b/login-db311.appspot.com/o/ChatMe%2Faxundzada%40hotmail.com%2Far.png?alt=media&token=ae156658-2c78-49c0-9e90-3457424e080a',
                  }}
                />
              </View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('GiftedChatter', {ID: item.Name}),
                    TalkOnetoOne();
                }}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'grey',
                  flex: 5,
                  margin: 10,
                }}>
                <Text>UserName : {item.Username}</Text>
                <Text>
                  {item.surName} {item.Name}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      />
    </SafeAreaView>
  );
};

export default Users;
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});
