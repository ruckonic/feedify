import React, {createContext, useRef, PropsWithChildren} from 'react'
import {Animated} from 'react-native'

export const HeaderAnimationContext = createContext(new Animated.Value(0))

interface HeaderAnimationProviderProps extends PropsWithChildren<{}> {}

export function HeaderAnimationProvider({
  children,
}: HeaderAnimationProviderProps) {
  const animate = useRef(new Animated.Value(0)).current
  return <HeaderAnimationContext.Provider children={children} value={animate} />
}
