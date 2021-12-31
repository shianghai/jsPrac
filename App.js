import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomNavTab from './navigation/tabNavigator/bottomTabNavigator'


const Tab = createBottomTabNavigator();

// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.


// (...)


export default function App() {
  return (
    <BottomNavTab/>
  );
}
