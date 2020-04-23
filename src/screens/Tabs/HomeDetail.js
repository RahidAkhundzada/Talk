import * as React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Button} from 'react-native';
import firebase from 'firebase';
//import {admin} from '../../Admin/admin';

const HomeDetail = ({navigation}) => {
  // function listAllUsers(nextPageToken) {
  //   // List batch of users, 1000 at a time.
  //   admin
  //     .auth()
  //     .listUsers(1000, nextPageToken)
  //     .then(function(listUsersResult) {
  //       listUsersResult.users.forEach(function(userRecord) {
  //         console.log('user', userRecord.toJSON());
  //       });
  //       if (listUsersResult.pageToken) {
  //         // List next batch of users.
  //         listAllUsers(listUsersResult.pageToken);
  //       }
  //     })
  //     .catch(function(error) {
  //       console.log('Error listing users:', error);
  //     });
  // }
  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title="vur" onPress={() => listAllUsers()} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Detail Screen</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text>Go Home Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeDetail;
