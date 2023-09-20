import React, {useContext} from 'react'
import {SafeAreaView, Animated} from 'react-native'

import {FeedsList} from '../components/feeds/FeedsList'
import {HeaderAnimationContext} from '../providers/header-animation'
import {RootStackScreenProps} from '../navigation/navigation.type'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Feeds: undefined
    }
  }
}

export function FeedsScreen({}: RootStackScreenProps<'Feeds'>) {
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
