import react from "react";
import {Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

const DefaultBtn = ({text, onPress}) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.purple,
        padding: 12,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 20,
      },
      buttonText: {
        color: colors.offwhite,
        fontFamily: 'Quicksand_500Medium',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default DefaultBtn;

