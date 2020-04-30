import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../Components/CustomHeader';
import NoteView from '../../Components/NoteView';
import {NoteData} from '../../Redux/Action/ActionNote';

const Note = props => {
  const navigation = useNavigation();
  useEffect(() => {
    var user = firebase.auth().currentUser;
    var DATA = [];
    var UseriD = user.uid;
    firebase
      .database()
      .ref('Note/' + UseriD)
      .once('value')
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childSnap = childSnapshot.val();
          DATA.push(childSnap);
        });
      });
    setTimeout(() => {
      props.NoteData(DATA.reverse());
    }, 1000);
  }, [props]);

  return (
    <View style={styles.container}>
      <CustomHeader title="Note +" navigation={navigation} />
      <View style={{flex: 7}}>
        <FlatList
          data={props.ListNote}
          renderItem={({item, index}) => (
            <NoteView item={item} navigation={navigation} />
          )}
        />
      </View>

      <View style={styles.BtnStyle}>
        <TouchableOpacity
          style={styles.btnPlus}
          onPress={() => {
            navigation.navigate('Add Note');
          }}>
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

const mapStateToProps = state => {
  return {
    ListNote: state.Note.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    NoteData: value => {
      dispatch(NoteData(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Note);
