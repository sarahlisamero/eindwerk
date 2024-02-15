import react from "react";
import {Text, StyleSheet, TouchableOpacity } from 'react-native';

const SecondaryBtn = ({text, onPress}) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#F8F7F3',
        borderColor: '#5553CC',
        borderWidth: 4,
        padding: 16,
        borderRadius: 8,
        overflow: 'hidden',
      },
      buttonText: {
        color: '#5553CC',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default SecondaryBtn;

