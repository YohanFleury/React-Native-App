import React from 'react'
import { Image, View, StyleSheet, KeyboardAvoidingView } from 'react-native'

import AppText from '../components/AppText/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'
import ContactSellerForm from '../components/contactSellerForm'


const ListingDetailsScreen = ({ route }) => {
    const listing = route.params

    return (
       
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        >
            <Image style={styles.image} source={listing.images} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.subTitle}>${listing.price}</AppText>
                <AppText style={styles.description}>{listing.description}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/jacket.jpg')}
                        title="Yohan Fleury"
                        subTitle="5 Listings"
                    />
                </View>
                <ContactSellerForm listing={listing} />
            </View>
        </KeyboardAvoidingView>
        
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    description: {
        fontSize: 20,
        color: colors.dark
    },
    userContainer: {
        marginVertical: 40,
    }
})

export default ListingDetailsScreen
