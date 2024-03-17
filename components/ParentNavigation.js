import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useState } from 'react';
import colors from '../constants/colors';

const ParentNavigation = () => {
    const navigation = useNavigation();
    const [activeButton, setActiveButton] = useState('');

    // Function to handle button press
    const handlePress = (screenName) => {
      setActiveButton(screenName);
      navigation.navigate(screenName);
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.navItem, activeButton === 'ParentHome' && styles.activeNavItem]}
        onPress={() => handlePress('ParentHome')}>
          <Image source={require('../assets/home.png')}/>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={[styles.navItem, activeButton === 'AddTask' && styles.activeNavItem]}
        onPress={() => handlePress('AddTask')}>
          <Image source={require('../assets/task.png')}/>
          <Text style={styles.navText}>Taken</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={[styles.navItem, activeButton === 'ParentProfile' && styles.activeNavItem]}
        onPress={() => handlePress('ParentProfile')}>
          <Image source={require('../assets/profile.png')}/>
          <Text style={styles.navText}>Profiel</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: colors.offwhite,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 60,
      position: 'absolute',
      left: '30%', 
      width: '40%', 
      borderRadius: 8,
      paddingVertical: 10,
    },
    navItem: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeNavItem: {
      borderBottomWidth: 2, // Add a purple line when button is active
      borderBottomColor: colors.purple,
    },
    navText: {
      color: colors.purple,
      fontSize: 18,
      marginTop: 4,
    },
  });
export default ParentNavigation;