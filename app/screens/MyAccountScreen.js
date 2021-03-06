import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'
import useAuth from '../auth/useAuth'


const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
        targetScreen: "MyListings"
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: "Messages"
    }
]

const MyAccountScreen = ({┬ánavigation }) => {

    const { user, logOut } = useAuth()

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require('../assets/jacket.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name}
                                      backgroundColor={item.icon.backgroundColor}  
                                />
                                
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    )}
                    
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={ <Icon name="logout" backgroundColor="#ffe66d"/> }
                onPress={() => logOut()} 
            />    
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default MyAccountScreen
