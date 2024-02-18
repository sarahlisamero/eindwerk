import react from "react";
import {TextInput, StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

const Input = (properties) => {
    return (
        <View>
            <Text  style={styles.label}>{properties.label}</Text>
            <TextInput style={styles.input} placeholder={properties.placeholder} {...properties} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 24,
        padding:12,
        borderRadius: 8,
        backgroundColor: colors.offwhite,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
});

export default Input;