import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../../screens/tabs/home'
import DiscussionsScreen from '../../screens/tabs/discussions'
import NotificationsScreen from '../../screens/tabs/notifications'
import SettingsScreen from '../../screens/tabs/settings'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen