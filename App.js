import React, {Fragment} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  ScrollView,
  Button,
} from 'react-native';

import {connect} from 'react-redux';
import {USER} from './src/Extra/UserData';

let imageView = () => {
  try {
    return {uri: USER.photoURL};
  } catch (error) {
    return require('./src/Images/user1.png');
  }
};


import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from './src/screens/Auth/Login';
import Registr from './src/screens/Auth/Registr';
import HomeScreen from './src/screens/Tabs/HomeScreen';
import HomeDetail from './src/screens/Drawers/HomeDetail';
import Users from './src/screens/Tabs/Users';
import Note from './src/screens/Drawers/Note';
import GeneralChat from './src/screens/Drawers/GeneralChat';
import ChatPage from './src/screens/ChatPage';
import Profile from './src/screens/Drawers/Profile';
import MovieSearch from './src/screens/Drawers/MovieSearch';
import Calc from './src/screens/Drawers/Calc';
import AddNote from './src/screens/AddNote';
import NoteFullView from './src/screens/NoteFullView';
import Logout from './src/screens/Drawers/Logout';

const StackApp = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const StackNote = createStackNavigator();
const StackLogin = createStackNavigator();

function StackNoteApp() {
  return (
    <StackNote.Navigator>
      <StackNote.Screen
        name="Note"
        component={Note}
        options={{headerShown: false}}
      />
      <StackNote.Screen name="Add Note" component={AddNote} />
      <StackNote.Screen name="NoteFullView" component={NoteFullView} />
    </StackNote.Navigator>
  );
}

function LoginStack() {
  return (
    <StackLogin.Navigator>
      <StackLogin.Screen
        name="Login"
        component={Login}
        options={() => ({headerShown: false})}
      />
      <StackLogin.Screen
        name="Registr"
        component={Registr}
        options={() => ({headerShown: false})}
      />
    </StackLogin.Navigator>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Note" component={StackNoteApp} />
      <Drawer.Screen name="HomeDetail" component={HomeDetail} />
      <Drawer.Screen name="GeneralChat" component={GeneralChat} />
      <Drawer.Screen name="ChatPage" component={ChatPage} />
      <Drawer.Screen name="MovieSearch" component={MovieSearch} />
      <Drawer.Screen name="Calc" component={Calc} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Exit" component={Logout} />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{margin: 5, alignItems: 'center'}}>
        <Image
          source={imageView()}
          style={{height: 70, width: 70, borderRadius: 35}}
        />
      </View>
      <ScrollView style={{marginLeft: 5}}>
        <TouchableOpacity
          style={{marginTop: 20, flexDirection: 'row', margin: 5}}
          onPress={() => props.navigation.navigate('HomeScreen')}>
          <Image
            source={require('./src/Images/home.png')}
            style={{height: 20, width: 20}}
          />
          <Text> Home</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 20, color: 'red'}}>Pages</Text>
        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => props.navigation.navigate('Note')}>
          <Text>Notepad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('HomeDetail')}>
          <Text>HomeDetail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('MovieSearch')}>
          <Text>MovieSearch</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('Calc')}>
          <Text>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('GeneralChat')}>
          <Text>GeneralChat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('Profile')}>
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('Exit')}>
          <Text>Exit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused
              ? require('./src/Images/home.png')
              : require('./src/Images/home2.png');
          } else if (route.name === 'Users') {
            iconName = focused
              ? require('./src/Images/group.png')
              : require('./src/Images/group1.png');
          }
          return <Image source={iconName} style={{width: 20, height: 20}} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          headerShown: false,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        })}
      />
      <Tab.Screen name="Users" component={Users} />
    </Tab.Navigator>
  );
}

const App = props => {
  return props.isLogged ? (
    <NavigationContainer>
      <StackApp.Navigator>
        <StackApp.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={() => ({
            headerShown: false,
          })}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <StackApp.Navigator>
        <StackApp.Screen
          name="Login"
          component={LoginStack}
          options={() => ({headerShown: false})}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = state => {
  return {
    isLogged: state.isLogged.login,
  };
};

export default connect(
  mapStateToProps,
  null,
)(App);
