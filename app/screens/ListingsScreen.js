import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import ActivityIndicator from '../components/ActivityIndicator'
import Card from '../components/Card'
import routes from '../navigation/routes'
import Screen from '../components/Screen'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import AppText from '../components/AppText/AppText'
import AppButton from '../components/AppButton'
import useApi from '../hooks/useApi'


const ListingsScreen = ({ navigation }) => {

    const { data, loading, error, request } = useApi(listingsApi.getListings)

    useEffect(() => {
        request()
    }, [])

    
    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen style={styles.screen}>
                {error && 
                    <>
                        <AppText>Les données n'ont pas pu être chargées </AppText>
                        <AppButton title="Réessayer" onPress={request} />
                    </> }
                
                <FlatList 
                    data={data}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) =>
                        <Card
                            title={item.title}
                            subTitle={"$" + item.price}
                            imageUrl={item.images[0].url}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)} 
                        />
                    }
                />
            </Screen>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})


export default ListingsScreen
