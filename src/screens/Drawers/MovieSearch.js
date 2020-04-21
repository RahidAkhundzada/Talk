import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TextInput,
  StyleSheet,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
//import Header from '../components/Header';
const ww = Dimensions.get('window').width;
const hh = Dimensions.get('window').height;

export default class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: '',
      url: 'http://api.tvmaze.com/search/shows?q=',
    };
  }

  textChanged = text => {
    this.setState({text});
  };

  Search = async () => {
    Keyboard.dismiss();
    this.setState({
      data: [],
      text: '',
    });
    const response = await fetch(this.state.url + this.state.text);
    var data = await response.json();
    this.setState({
      data,
    });
  };

  onFocus() {
    this.setState({
      text: '',
    });
  }
  imageView(par) {
    try {
      return {uri: par.medium};
    } catch (error) {
      return require('../../Images/noPng.png');
    }
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.textStyle}> Welcome Movie App </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder="Search..."
              placeholderTextColor="white"
              onFocus={() => this.onFocus()}
              style={styles.inputStyle}
              onChangeText={text => this.textChanged(text)}
              value={this.state.text}
            />
            <TouchableOpacity onPress={() => this.Search()}>
              <Image
                style={{height: hh / 15, width: ww / 15}}
                source={require('../../Images/search2.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={this.state.data}
          contentContainerStyle={{paddingBottom: 100}}
          keyExtractor={item => item.index}
          renderItem={({item, index}) => (
            <View key={index} style={styles.flatStyle}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View style={{flex: 1}}>
                  <Image
                    source={this.imageView(item.show.image)}
                    style={{width: ww / 2, height: hh / 3}}
                  />
                  <Text style={{color: 'red'}}>
                    Premiered Date : {item.show.premiered}
                  </Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', marginLeft: 10}}>
                  <Text style={styles.nameStyle}>{item.show.name}</Text>
                  <Text style={styles.summaryStyle}>
                    Summary : {item.show.summary}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0076FB',
    height: hh / 10,
  },
  flatStyle: {
    marginBottom: 10,
    marginLeft: 2,
    marginTop: 2,
    marginRight: 2,
  },
  textStyle: {
    fontSize: hh / 30,
    fontWeight: 'bold',
  },
  inputStyle: {
    backgroundColor: '#006CBB',
    width: '85%',
    height: hh / 20,
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 10,
    fontSize: hh / 50,
    color: 'white',
  },
  nameStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    borderBottomWidth: 1,
  },
  summaryStyle: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 30,
    color: 'black',
  },
});
