import React, {createContext, useRef} from 'react'
import {Animated} from 'react-native'

export const HeaderAnimationContext = createContext(new Animated.Value(0))

export function HeaderAnimationProvider({children}) {
  const animate = useRef(new Animated.Value(0)).current
  return <HeaderAnimationContext.Provider children={children} value={animate} />
}
