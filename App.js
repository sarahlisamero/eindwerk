import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import { useCustomFonts } from './constants/fonts'; // Ensure to import the function correctly

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useCustomFonts(); // Ensure to get the fontsLoaded value correctly
  
  if (!fontsLoaded) {
    // Fonts are not loaded yet, return null or a loading indicator
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}











