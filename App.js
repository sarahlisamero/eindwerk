import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Importeer de navigatiebibliotheek
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importeer de schermen
import LoginScreen from './screens/Login';

// Maak een nieuw stapelnavigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


