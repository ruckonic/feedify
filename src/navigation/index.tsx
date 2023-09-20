import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen'
import RssListScreen from '../screens/RssListScreen'
import FeedsScreen from '../screens/FeedsScreen'
import Header from '../components/Header'
import AddRssLinkScreen from '../screens/AddRssLinkScreen'
import type {RootStackParamList} from './navigation.type'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#1F2937',
        headerTitleAlign: 'center',
        headerBackTitleStyle: {fontFamily: 'Inter', fontSize: 16},
        headerTitleStyle: {fontFamily: 'Inter', fontSize: 16, color: '#1F2937'},
      }}>
      <Stack.Group
        screenOptions={{
          headerTransparent: false,
          header: Header,
          animation: 'none',
          statusBarColor: undefined,
          contentStyle: {backgroundColor: '#F9FAFB'},
        }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="RssList" component={RssListScreen} />
        <Stack.Screen name="Feeds" component={FeedsScreen} />
      </Stack.Group>
      <Stack.Screen name="AddRssLink" component={AddRssLinkScreen} />
    </Stack.Navigator>
  )
}
