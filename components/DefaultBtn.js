import react from "react";
import {Text, StyleSheet, TouchableOpacity } from 'react-native';

const DefaultBtn = ({text, onPress}) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#5553CC',
        padding: 16,
        borderRadius: 8,
        overflow: 'hidden',
      },
      buttonText: {
        color: '#F8F7F3',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default DefaultBtn;

