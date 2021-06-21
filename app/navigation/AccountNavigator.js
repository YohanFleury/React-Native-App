import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from '../screens/MessagesScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import routes from './routes';
import MyListingsScreen from '../screens/MyListingsScreen';

const Stack = createStackNavigator()

const AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={routes.ACCOUNT} component={MyAccountScreen} />
            <Stack.Screen name={routes.MY_LISTINGS} component={MyListingsScreen} />
            <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
        </Stack.Navigator>
    )
}

export default AccountNavigator