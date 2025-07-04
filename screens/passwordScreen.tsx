// PasswordScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import EyeOff from '../assets/dont-view.svg';


type RootStackParamList = {
  EnterNameScreen: undefined;
};

const PasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [animatedValue] = useState(new Animated.Value(0));
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'EnterNameScreen'>>();

  const togglePasswordVisibility = () => {
    Animated.timing(animatedValue, {
      toValue: showPassword ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => setShowPassword(!showPassword));
  };

  const isPasswordValid = (pwd: string) => {
    return {
      length: pwd.length >= 8,
      lowercase: /[a-z]/.test(pwd),
      uppercase: /[A-Z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      symbol: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    };
  };

  const validations = isPasswordValid(password);
  const isValidPassword = Object.values(validations).every(Boolean);

  const handleSubmit = () => {
    if (isValidPassword) {
      navigation.navigate('EnterNameScreen');
    }
  };

  const rotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/password-page.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Set a Strong Password</Text>
      <Text style={styles.subtitle}>
        Set a strong password for your account.
      </Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          secureTextEntry={!showPassword}
          placeholder="********"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Animated.View style={{ transform: [{ rotateY: rotation }] }}>
            {showPassword ? (
                <Image
                source={require('../assets/eye-visible.png')}
                />
            ) : (
              <EyeOff width={20} height={20} />
            )}
          </Animated.View>
        </TouchableOpacity>
      </View>

      {!isValidPassword && (
        <Text style={styles.errorText}>
          Password does not meet requirements.
        </Text>
      )}

      <View style={styles.rulesContainer}>
        <Text style={rule(validations.length)}>
          Should contain at least 8 characters
        </Text>
        <Text style={rule(validations.lowercase)}>
          Should contain a lowercase (small) letter (a - z)
        </Text>
        <Text style={rule(validations.uppercase)}>
          Should contain a uppercase (capital) letter (A - Z)
        </Text>
        <Text style={rule(validations.number)}>
          Should contain at least one number (0-9)
        </Text>
        <Text style={rule(validations.symbol)}>
          Should contain at least one symbol ($,@,#,%,!,*,?,&)
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const rule = (isValid: boolean) => ({
  color: isValid ? '#715CF3' : '#999',
  fontSize: 14,
  marginVertical: 2,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    height: 150,
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
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  rulesContainer: {
    marginBottom: 20,
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
});

export default PasswordScreen;
