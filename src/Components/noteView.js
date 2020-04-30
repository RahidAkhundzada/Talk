import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const ww = Dimensions.get('window').width;
const hh = Dimensions.get('window').height;

const NoteView = ({item, navigation}) => {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('NoteFullView', {item: item})}
      underlayColor="orange">
      <View style={styles.container}>
        <View style={styles.stylTitle}>
          <Text style={styles.titleText}>{item.Title}</Text>
        </View>

        <View style={styles.NoteStyle}>
          <Text style={styles.NoteText}>{item.Note}</Text>
        </View>
        <View style={styles.TimeStyle}>
          <Text style={styles.TimeText}>
            Time: {item.CreatedTime} Day: {item.CreatedDay}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default NoteView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    margin: 15,
    borderTopRightRadius: 30,
  },
  stylTitle: {
    //alignItems:'center',
    marginLeft: ww / 10,
    marginTop: 10,
    borderBottomWidth: 0.5,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: hh / 40,
    color: 'red',
  },
  NoteStyle: {
    marginLeft: ww / 18,
    marginTop: 10,
  },
  NoteText: {
    fontSize: 16,
    height: hh / 15,
  },
  TimeStyle: {
    flexDirection: 'row-reverse',
  },
  TimeText: {
    color: 'gray',
  },
});
