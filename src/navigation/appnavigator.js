// src/navigation/AppNavigator.js
import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login';
import SignupScreen from '../screens/signup';
import SetProfile from '../screens/setprofile';
import DrawerNavigator from './drawernavigator';
import { AuthContext } from '../context/Authcontext';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        // ✅ User is logged in
        <Stack.Screen name="MainApp" component={DrawerNavigator} />
      ) : (
        // ❌ Not logged in
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SetProfile" component={SetProfile} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
