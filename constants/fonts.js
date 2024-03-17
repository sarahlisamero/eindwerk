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


