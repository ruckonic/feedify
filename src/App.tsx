import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {RootStack} from './navigation'
import {HeaderAnimationProvider} from './providers/header-animation'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export function App() {
  return (
    <SafeAreaProvider>
      <HeaderAnimationProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </HeaderAnimationProvider>
    </SafeAreaProvider>
  )
}

export default App
