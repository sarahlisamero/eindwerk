//DashboardScreen.js
  import React, { useEffect, useState } from 'react';
  import { View, Text, StyleSheet, Image } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { IP_ADDRESS } from '../config';
  const ip = IP_ADDRESS;

  const DashboardScreen = () => {
      const [parentData, setParentData] = useState(null);
  
      useEffect(() => {
          fetchParentData();
      }, []);
  
      const fetchParentData = async () => {
          try {
              const token = await AsyncStorage.getItem('token');
              const parentId = await AsyncStorage.getItem('parentid');
              const response = await fetch(`http://${ip}:3000/api/v1/parents/${parentId}`, {
                  method: 'GET',
                  headers: {
                      'Authorization': `Bearer ${token}`,
                  },
              });
  
              if (!response.ok) {
                  throw new Error('Failed to fetch parent data');
              }
  
              const parentData = await response.json();
              setParentData(parentData);
              console.log('Parent Data:', parentData);
          } catch (error) {
              console.error('Error fetching parent data:', error);
          }
      };
   
      return (
          <View style={styles.fullContainer}>
              {parentData ? (
                  <View style={styles.center}>
                      <Text>Kies een account</Text>
                      <Text>{parentData.username}</Text>
                       {/* Display profile picture */}
                      {parentData.profilePicture && (
                        <Image source={{ uri: parentData.profilePicture }} style={styles.profilePicture} />
                      )}
                      <View style={styles.childrenContainer}>
                        {parentData.children.map(child => (
                            <Text key={child._id} style={styles.childName}>{child.name}</Text> 
                            
                        ))}
                    </View>
                  </View>
              ) : (
                  <Text>Loading...</Text>
              )}
          </View>
      );
  };

  const styles = StyleSheet.create({
    fullContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    center:{
      alignItems: 'center',
    },
    childrenContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10,
    },
});

export default DashboardScreen;