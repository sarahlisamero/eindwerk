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
        padding: 16,
        borderRadius: 8,
        overflow: 'hidden',
      },
      buttonText: {
        color: colors.offwhite,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default DefaultBtn;

