// LoginScreen.js
import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DefaultBtn from '../components/DefaultBtn';
import SecondaryBtn from '../components/SecondaryBtn';

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
        <TextInput
            style={styles.input}
            placeholder="Gebruikersnaam"
            value={username}
            onChangeText={(text) => setUsername(text)}
        />
        <TextInput
            style={styles.input}
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
        height: 150, // Adjust the height as needed
        resizeMode: 'contain',
      },
    textContainer: {
      width: '35%',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    input: {
      height: 40,
      marginBottom: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      backgroundColor: '#f5f5f5',
    },
    /*btn: {
      backgroundColor: '#5553CC',
      padding: 16,
      borderRadius: 8,
      overflow: 'hidden',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },*/
  });

export default LoginScreen;