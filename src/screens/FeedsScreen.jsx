import React from 'react'
import Header from '../components/Header'
import {FeedsList} from '../components/feeds/FeedsList'
import {SafeAreaView, Animated} from 'react-native'

export function FeedsScreen() {
  const animate = React.useRef(new Animated.Value(0)).current

  return (
    <>
      <Header animateValue={animate} />
      <FeedsList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: animate}}}],
          {useNativeDriver: false},
        )}
      />
      <SafeAreaView />
    </>
  )
}

export default FeedsScreen
