import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home';
// import ChatScreen from '../screens/ChatScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator screenOptions={{ headerShown: true }} initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen}/>
    {/* <Drawer.Screen name="Chat" component={ChatScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
  </Drawer.Navigator>
);

export default DrawerNavigator;
