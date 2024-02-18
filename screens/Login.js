// LoginScreen.js
import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DefaultBtn from '../components/DefaultBtn';
import Input from '../components/Input';

const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'gebruiker' && password === 'wachtwoord') {
      // Inloggen geslaagd
      alert('Inloggen geslaagd!');
      navigation.navigate('Home'); //nog aanmaken!
    } else {
      alert('Inloggen mislukt. Controleer je gebruikersnaam en wachtwoord.');
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/defaultAvatar.webp')} style={styles.image} />
        </View>
    <View style={styles.textContainer}>
        <View style={styles.logoContainer}>
            <Image source={require('../assets/logo.webp')} style={styles.logo}/>
        </View>
        <Input
            label="Gebruikersnaam"
            placeholder="Gebruikersnaam"
            value={username}
            onChangeText={(text) => setUsername(text)}
        />
        <Input 
            label="Wachtwoord" 
            placeholder="Wachtwoord"
            secureTextEntry
            value={password} 
            onChangeText={(text) => setPassword(text)} 
        />
       
        <DefaultBtn onPress={handleLogin} text="Aanmelden" />
        </View>
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'space-around',
      padding: 16,
      backgroundColor: '#fff',
    },
    imageContainer: {
      width: '40%',
    },
    image: {
      width: '100%',
      height: '100%', 
      resizeMode: 'contain',
    },
    logoContainer: {
        marginBottom: 16,
    },
    logo: {
      width: '100%',
      height: 150, 
      resizeMode: 'contain',
    },
    textContainer: {
      width: '35%',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });

export default LoginScreen;