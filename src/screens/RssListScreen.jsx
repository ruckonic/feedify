import React from 'react'
import {SafeAreaView, Animated, StyleSheet, View} from 'react-native'

import Header from '../components/Header'
import {RssList} from '../components/rss/RssList'
import Button from '../components/Button'

export function RssListScreen() {
  const animate = React.useRef(new Animated.Value(0)).current

  return (
    <>
      <Header animateValue={animate} />
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
