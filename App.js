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











// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './screens/Login';
// import useCustomFonts from './constants/fonts';

// const Stack = createStackNavigator();

// export default function App() {
//   const fontsLoaded = useCustomFonts();

//   if (!fontsLoaded) {
//     // Fonts are not loaded yet, return null or a loading indicator
//     return null;
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }











// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// // Importeer de navigatiebibliotheek
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // Importeer de schermen
// import LoginScreen from './screens/Login';

// // importeer fonts

// import useCustomFonts from './constants/fonts';

// // Maak een nieuw stapelnavigator
// const Stack = createStackNavigator();

// export default function App() {

//   const fontsLoaded = useCustomFonts();

//   if (!fontsLoaded) {
//     return null;
//   } else {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false,}}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }


