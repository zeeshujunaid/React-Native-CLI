import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Back!</Text>
      <Text style={styles.subText}>This is the login page of your awesome app.</Text>
      <Text style={styles.note}>Please use your credentials to continue.</Text>
      <Button title="Click Me" onPress={() => navigation.navigate("MainApp")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E86DE',
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: '#34495E',
    marginBottom: 8,
  },
  note: {
    fontSize: 16,
    color: '#7F8C8D',
    marginTop: 10,
  },
});

export default Login;
