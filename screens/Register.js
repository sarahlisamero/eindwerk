import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { AsyncStorage } from 'react-native';
import DefaultBtn from '../components/DefaultBtn';
import Input from '../components/Input';
import SecondaryBtn from '../components/SecondaryBtn';
import colors from '../constants/colors';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleRegister = async () => {
        //logic register 
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
                label="Naam"
                placeholder="Naam"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Input 
                label="Wachtwoord" 
                placeholder="Wachtwoord"
                secureTextEntry
                value={password} 
                onChangeText={(text) => setPassword(text)} 
            />
            <SecondaryBtn text="Upload profielfoto" />
            <DefaultBtn onPress={handleRegister} text="Account aanmaken" />
            <View style={{flexDirection: 'row', marginTop:10, justifyContent: 'center'}}>
              <Text>Al een account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{color: colors.purple}}> Meld je aan</Text>
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
    imageContainer: {
      width: '40%',
    },
    image: {
      width: '100%',
      height: '100%', 
      resizeMode: 'contain',
    },
    logoContainer: {
        marginBottom: 8,
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
export default RegisterScreen;