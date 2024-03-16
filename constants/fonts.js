// fonts.js

import {
  useFonts,
  Fredoka_400Regular,
} from '@expo-google-fonts/fredoka';

import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
  } from '@expo-google-fonts/quicksand';

export function useCustomFonts() {
  return useFonts({
    Fredoka_400Regular,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

}


// import { useFonts } from 'expo-font';

// export function useCustomFonts() {
//   return useFonts({
//     FredokaOne: require('../assets/fonts/FredokaOne-Regular.ttf'),
//     QuicksandRegular: require('../assets/fonts/Quicksand-Regular.ttf'),
//     QuicksandBold: require('../assets/fonts/Quicksand-Bold.ttf'),
//     QuicksandMedium: require('../assets/fonts/Quicksand-Medium.ttf'),
//     QuicksandLight: require('../assets/fonts/Quicksand-Light.ttf'),
//     QuicksandSemiBold: require('../assets/fonts/Quicksand-SemiBold.ttf'),
//   });
// }

// export default useCustomFonts;

