import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

const AppButton = ({ title, onPress, color = 'primary' }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, { backgroundColor: colors[color]}]} >
                <Text style={styles.text}> {title} </Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default AppButton