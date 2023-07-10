import React, {useContext} from 'react'
import {SafeAreaView, Animated, View} from 'react-native'
import {useHeaderHeight} from '@react-navigation/elements'
import {FeedsList} from '../components/feeds/FeedsList'
import {HeaderAnimationContext} from '../providers/header-animation'

export function FeedsScreen() {
  const animate = useContext(HeaderAnimationContext)

  return (
    <>
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
