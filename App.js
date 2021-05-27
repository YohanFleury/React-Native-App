import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, Button, Alert, TextInput, Switch } from 'react-native';
import AppPicker from './app/components/AppPicker';
import ListItem from './app/components/ListItem';
import ListingEditScreen from './app/screens/ListingEditScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Screen from './app/components/Screen'
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {

  return (
    <ListingEditScreen />
  );
}