
import { useEffect } from 'react'
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'
import expoPushTokensApi from '../api/expoPushToken'


export default useNotification = (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications()

        Notifications.addNotificationsDroppedListener(notificationListener)
    }, [])

    const registerForPushNotifications = async () => {
        try {
            const { granted } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            if (!granted) return 

            const token = await Notifications.getExpoPushTokenAsync()
            expoPushTokensApi.register(token)
        } catch (error) {
            console.log('erreur', error)
        } 
    }
}