import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeStackScreen from '../stacks/homeStackScreen'
import DiscussionsStackScreen from '../stacks/discussionsStackScreen'
import NotificationsStackScreen from '../stacks/notificationsStackScreen'
import SettingsStackScreen from '../stacks/settingsStackScreen'
import { NavigationContainer } from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons'
import SettingsScreen from '../../screens/tabs/settings'
import NotificationsScreen from '../../screens/tabs/notifications'
import DiscussionsScreen from '../../screens/tabs/discussions'
import HomeScreen from '../../screens/tabs/home'



const Tab  = createBottomTabNavigator()
    



export default function BottomTab(){
    return (
        <NavigationContainer>
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-home' : 'ios-home-outline';
              } else if (route.name === 'Discussions') {
                iconName = focused 
                  ? 'ios-chatbubbles' : 'ios-chatbubbles-outline';
              }
              else if (route.name === 'Notifications'){
                iconName = focused 
                  ? 'ios-notifications' 
                  : 'ios-notifications-outline';
              }
              else if(route.name === 'Settings'){
                iconName = focused 
                  ? 'ios-settings' 
                  : 'ios-settings-outline';
              }

  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;

            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          })}
        >
                <Tab.Screen 
                  name="Home"
                  component={HomeScreen} 
                  />
                <Tab.Screen name="Discussions" component={DiscussionsScreen} />
                <Tab.Screen name="Notifications" component={NotificationsScreen}  options={{tabBarBadge: 3}}/>
                <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
}

