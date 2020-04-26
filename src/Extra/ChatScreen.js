import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';



export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> ChatScreen </Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
flex:1
  }
})