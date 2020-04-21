import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const CustomHeader = ({title, isHome, navigation, img}) => {
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      {isHome ? (
        <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
          <Image
            style={{width: 30, height: 30, marginLeft: 5}}
            source={require('./Images/menu.png')}
            resizeMode="contain"
            onPress={() => navigation.openDrawer()}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 25, height: 25, marginLeft: 5}}
            source={require('./Images/previous.png')}
            resizeMode="contain"
            onPress={() => navigation.goBack()}
          />
          <Text>Back</Text>
        </TouchableOpacity>
      )}
      <View style={{flex: 1.5, height: 50, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View style={{flex: 1}} />

      {isHome ? (
        <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
          <Image
            style={{width: 40, height: 40, marginLeft: 40, borderRadius: 20}}
            source={{uri: img}}
            resizeMode="contain"
            onPress={() => navigation.openDrawer()}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export default CustomHeader;
