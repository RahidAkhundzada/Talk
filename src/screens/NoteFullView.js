import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const NoteFullView = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.titleStyle}>
        <Text style={styles.titleText}> {item.Title}</Text>
      </View>
      <View style={styles.TimeStyle}>
        <Text style={styles.TimeText}>Created Day : {item.CreatedDay}</Text>
        <Text style={styles.TimeText}>Created Time : {item.CreatedTime}</Text>
      </View>
      <View style={styles.NoteStyle}>
        <ScrollView>
          <Text>{item.Note}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default NoteFullView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    color:'red'
  },
  TimeStyle: {
    margin: 10,
  
  },
  TimeText:{
    color:'grey'
  },
  NoteStyle: {
    margin: 10,
  },
});
