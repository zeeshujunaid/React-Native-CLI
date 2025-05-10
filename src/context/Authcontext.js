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
    const unsubscribe = auth().onAuthStateChanged(async (firebaseUser) => {
      console.log('Firebase user:', firebaseUser);

      if (firebaseUser) {
        setUser(firebaseUser);

        // Save user to AsyncStorage
        await AsyncStorage.setItem('user', JSON.stringify({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
        }));

        const setupCompleted = await AsyncStorage.getItem('userSetupCompleted');
        console.log('Setup completed:', setupCompleted);

        if (setupCompleted !== 'true') {
          console.log('User setup not completed');
          navigate('SetProfile');
        } else {
          console.log('User setup completed');
          navigate('MainApp');
        }
      } else {
        // Logout logic
        setUser(null);
        await AsyncStorage.multiRemove(['user', 'userSetupCompleted']);
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
