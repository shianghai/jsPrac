import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../../screens/tabs/home'
import DiscussionsScreen from '../../screens/tabs/discussions'
import NotificationsScreen from '../../screens/tabs/notifications'
import SettingsScreen from '../../screens/tabs/settings'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      
    </HomeStack.Navigator>
  );
}
export default HomeStackScreen;