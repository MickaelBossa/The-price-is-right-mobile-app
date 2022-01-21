// Librairies
import React from 'react';
import { AppTabNavigator } from './Navigators';
import { NavigationContainer } from '@react-navigation/native';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AppTabNavigator />
    </NavigationContainer>
  );
}