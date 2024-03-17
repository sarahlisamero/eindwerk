import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

export const styles = StyleSheet.create({
    headingOne:{
        fontFamily: 'Fredoka_400Regular',
        fontSize: 32,
        color: colors.offblack,
    },
    headingTwo:{
        fontFamily: 'Quicksand_400Regular',
        fontSize: 16,
        color: colors.offblack,
    },
    headingThree:{
        fontFamily: 'Quicksand_400Regular',
        fontSize: 14,
        color: colors.offblack,
    },
    link:{
        fontFamily: 'Quicksand_400Regular',
        fontSize: 12,
        color: colors.purple,
    },
    bodyText:{
        fontFamily: 'Quicksand_400Regular',
        fontSize: 12,
        color: colors.offblack,
    },
    inputLabel:{
        fontFamily: 'Quicksand_500Medium',
        fontSize: 12,
        color: colors.offblack,
    },
});

export default styles;
