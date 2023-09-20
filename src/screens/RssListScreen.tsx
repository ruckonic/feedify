import React, {useContext} from 'react'
import {SafeAreaView, Animated, StyleSheet, View} from 'react-native'

import {RssList} from '../components/rss/RssList'
import Button from '../components/Button'
import {HeaderAnimationContext} from '../providers/header-animation'
import {RootStackScreenProps} from '../navigation/navigation.type'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      RssList: undefined
    }
  }
}

export function RssListScreen({navigation}: RootStackScreenProps<'RssList'>) {
  const animate = useContext(HeaderAnimationContext)
  return (
    <>
      <RssList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animate}}}],
          {useNativeDriver: false},
        )}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="+ Agregar nuevo link"
          style={styles.button}
          textStyles={styles.buttonTitle}
          onPress={() => navigation.push('AddRssLink')}
        />
      </View>
      <SafeAreaView />
    </>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '80%',
    marginVertical: 8,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#1F4690',
    width: '100%',
  },
  buttonTitle: {
    color: 'white',
  },
})

export default RssListScreen
