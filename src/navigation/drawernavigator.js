import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
// import ChatScreen from '../screens/ChatScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen}/>
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
