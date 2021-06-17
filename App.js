import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigation from './app/navigation/AppNavigation';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import AppLoading from 'expo-app-loading'
import { navigationRef } from './app/navigation/rootNavigation'

export default function App() {
  
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user)
  }
  if (!isReady)
    return (<AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={() => console.log('Pb with AppLoading component')} />)


  return (
    <AuthContext.Provider value={{ user, setUser }}  >
    <OfflineNotice />
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      {user ? <AppNavigation /> : <AuthNavigator /> }
    </NavigationContainer>
    </AuthContext.Provider>
    
  );
}