// Librairies
import React from 'react';
import Colors from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Navigateurs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Ecrans
import PlayScreen from '../screens/Play';
import HistoryScreen from '../screens/History';
import ParametersScreen from '../screens/Parameters';

const TabNavigator = createBottomTabNavigator();

export const AppTabNavigator = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.primary,
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Play') {
            iconName = focused ? 'game-controller' : 'game-controller-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'beer' : 'beer-outline';
          } else if (route.name === 'Parameters') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      initialRouteName='Play'
    >
      <TabNavigator.Screen name='Play' component={PlayScreen} options={{title: 'Jouer'}} />
      <TabNavigator.Screen name='History' component={HistoryScreen} options={{title: 'Historique'}} />
      <TabNavigator.Screen name='Parameters' component={ParametersScreen} options={{title: 'Paramètres'}} />
    </TabNavigator.Navigator>
  );
};
