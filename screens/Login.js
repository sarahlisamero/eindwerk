// LoginScreen.js
import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { IP_ADDRESS } from '../config';
const ip = IP_ADDRESS;
/*import { AsyncStorage } from 'react-native';*/
import AsyncStorage from '@react-native-async-storage/async-storage';
import DefaultBtn from '../components/DefaultBtn';
import Input from '../components/Input';
import colors from '../constants/colors';

const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    const handleLogin = async () => {
    try{
      const response = await fetch(`http://${ip}:3000/api/v1/parents/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      console.log('Login data:', data);
      const token = data.token;
      console.log('Token:', token);
      await AsyncStorage.setItem('token', token);
      /*navigation.navigate('Dashboard',{ token: token });*/
      const parentid = data.parentid;
      console.log('Parent ID:', parentid);
      await AsyncStorage.setItem('parentid', parentid);
      navigation.navigate('Dashboard');
    } catch (error){
      console.error('Login failed:', error); 
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftHalfBackground} />
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
        
          <TouchableOpacity style={{marginTop:-10, marginBottom:24}}/*onPress={() => navigation.navigate('forgotPassword')}*/>
            <Text>Wachtwoord vergeten?</Text>
          </TouchableOpacity>

          <DefaultBtn onPress={handleLogin} text="Aanmelden" />
          <View style={{flexDirection: 'row', marginTop:10, justifyContent: 'center'}}>
            <Text>Nog geen account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{color: colors.purple}}> Maak hier je account aan</Text>
            </TouchableOpacity>
          </View>
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
    leftHalfBackground: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '50%', // Set the width to 50% to cover the left half
      backgroundColor: colors.twentygreen,
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
      /*display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',*/
    },
    logo: {
      width: '90%',
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