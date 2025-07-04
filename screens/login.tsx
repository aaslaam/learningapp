import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';


export type RootStackParamList = {
  Login: undefined;
  OTPVerification: undefined;
};

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();

  const handleContinue = () => {
    navigation.navigate('OTPVerification');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/login-page.jpg')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Login to your account</Text>
      <Text style={styles.subtitle}>Login with your phone number</Text>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/flag.png')} 
          style={styles.flagImage}
        />
        <Text style={styles.prefix}>+91</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="Enter your number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        don’t have an account?{' '}
        <Text style={styles.link}>Create an Account</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    height: 180,
    alignSelf: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  flagImage: {
    width: 24,
    height: 16,
    resizeMode: 'contain',
  },
  prefix: {
    fontSize: 16,
    marginLeft: 8,
    marginRight: 4,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#715CF3',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#555',
  },
  link: {
    color: '#715CF3',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
