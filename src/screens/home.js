import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const handleSignOut = async () => {
    try {
      await auth().signOut(); // Firebase sign out
      await AsyncStorage.removeItem('user'); // Clear local storage
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while signing out.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Home Page</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
