import React, {useEffect, useState} from 'react';
import {Text, View, Button, Image} from 'react-native';
import firebase from 'firebase';
import CustomHeader from '../../CustomHeader';

const HomeScreen = ({navigation}) => {
  const [photo, setPhoto] = useState(require('../../Images/user.png'));

  var User;
  firebase.auth().onAuthStateChanged(function(user) {
    User = user;
    if (user.photoURL) {
      setTimeout(() => {
        setPhoto({uri: user.photoURL});
      }, 1000);
    } else {
      user.updateProfile({
        photoURL:
          'https://scontent.fgyd3-1.fna.fbcdn.net/v/t1.0-9/94042455_1463285933849532_7228233915385774080_n.jpg?_nc_cat=109&_nc_sid=ca434c&_nc_ohc=iGldBDAzHOMAX8KpvI3&_nc_ht=scontent.fgyd3-1.fna&oh=bd2c9abb0bfa8c82d7b6ecbfd909a7b9&oe=5EC56A33',
      });
      setTimeout(() => {
        setPhoto({uri: User.photoURL});
      }, 1000);
    }
  });

  return (
    <View>
      <CustomHeader
        isHome="true"
        title="Home"
        img={photo}
        navigation={navigation}
      />
      <Text>Welcome </Text>
      <Button title="opendrawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default HomeScreen;
