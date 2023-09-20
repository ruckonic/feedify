import React from 'react'
import {Pressable, StyleSheet, Text, Animated} from 'react-native'

interface ButtonProps {
  title?: string
  onPress?: () => void
  pressableProps?: React.ComponentProps<typeof Pressable>
  textStyles?: React.ComponentProps<typeof Text>['style']
  style?: React.ComponentProps<typeof Animated.View>['style']
}

export function Button({
  title,
  onPress = () => {},
  pressableProps,
  textStyles,
  style,
}: ButtonProps) {
  if (!title) {
    throw new Error(
      'You must provide at least one of the following props: title, LeftIcon, RightIcon',
    )
  }
  return (
    <Pressable {...pressableProps} onPress={onPress}>
      {({pressed}) => (
        <Animated.View
          style={StyleSheet.flatten([
            styles.wrapper,
            style,
            pressed ? styles.pressed : styles.unpressed,
          ])}>
          <Text style={StyleSheet.compose(styles.text, textStyles)}>
            {title}
          </Text>
        </Animated.View>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#E9EDF4',
  },
  text: {
    fontSize: 16,
    color: '#374151',
    fontFamily: 'Inter',
  },
  unpressed: {},
  pressed: {
    shadowOpacity: 0.1,
    opacity: 0.8,
  },
})

export default Button
