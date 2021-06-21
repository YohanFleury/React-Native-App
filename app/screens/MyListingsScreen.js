import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from '../components/AppText/AppText'

const MyListingsScreen = () => {
    return (
        <View style={styles.container}>
            <AppText>Page en construction ...</AppText>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default MyListingsScreen