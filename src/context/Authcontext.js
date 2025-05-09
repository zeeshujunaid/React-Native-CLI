import React, { createContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigation/navigationRef';
import { View, ActivityIndicator } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      console.log('Firebase user:', user);
      if (user) {
        setUser(user);

        await AsyncStorage.setItem('user', JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }));

        const setupCompleted = await AsyncStorage.getItem('userSetupCompleted');
        console.log('User setup completed flag:', setupCompleted);

        if (setupCompleted === 'true') {
          navigate('MainApp');
        } else {
          navigate('SetProfile');
        }

      } else {
        setUser(null);
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('userSetupCompleted');
        navigate('Login');
      }

      if (initializing) setInitializing(false);
    });

    return unsubscribe;
  }, []);

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
