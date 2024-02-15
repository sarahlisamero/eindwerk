import react from "react";
import {Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

const SecondaryBtn = ({text, onPress}) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.offwhite,
        borderColor: colors.purple,
        borderWidth: 4,
        padding: 16,
        borderRadius: 8,
        overflow: 'hidden',
      },
      buttonText: {
        color: colors.purple,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default SecondaryBtn;

