import React from 'react';
import {Text, View, Button} from 'react-native';
import CustomHeader from '../../Components/CustomHeader';
import {USER} from '../../Extra/UserData';

const HomeScreen = ({navigation}) => {
  let imageView = () => {
    try {
      return {uri: USER.photoURL};
    } catch (error) {
      return require('../../Images/user1.png');
    }
  };

  //user.photoURL
  return (
    <View>
      <CustomHeader
        isHome="true"
        title="Home"
        img={imageView()}
        navigation={navigation}
      />
      <Text>Welcome </Text>
      <Button title="opendrawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default HomeScreen;
