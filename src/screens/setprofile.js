import {
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
  } from 'react-native';

export default function SetProfile({navigation}) {
    return (
        <View style={{padding: 20}}>
          <Text>Set Profile</Text>
          <TextInput
            // placeholder="Email"
            // value={email}
            // onChangeText={setEmail}
            autoCapitalize="none"
            // keyboardType="email-address"
            style={{borderWidth: 1, marginVertical: 10, padding: 8}}
          />
    
          <TextInput
            // placeholder="Password"
            // value={password}
            // onChangeText={setPassword}
            secureTextEntry
            style={{borderWidth: 1, marginVertical: 10, padding: 8}}
          />
    
          <View style={{marginVertical: 10}}>
            <Button title="Signup" />
          </View>
    
          <View style={{marginVertical: 10}}>
            <Button title="Signup with Google"/>
          </View>
    
          <TouchableOpacity onPress={() => navigation.navigate('MainApp')}>
            <Text style={{marginTop: 20, color: 'blue'}}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>


        </View>
      );
}