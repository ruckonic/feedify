import React from 'react'
import {Pressable, StyleSheet, Text, Animated} from 'react-native'

export function Button({
  title,
  onPress = () => {},
  LeftIcon,
  RightIcon,
  pressableProps,
  textStyles,
  style,
}) {
  const _LeftIcon = LeftIcon ?? null
  const _RightIcon = RightIcon ?? null
  const _title = title ?? null

  if (!_LeftIcon && !_RightIcon && !_title) {
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
          {_LeftIcon}
          {_title && (
            <Text style={StyleSheet.compose(styles.text, textStyles)}>
              {_title}
            </Text>
          )}
          {_RightIcon}
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
    backgroundColor: '#F9FAFB',
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Inter Semibold',
  },
  unpressed: {},
  pressed: {
    shadowOpacity: 0.1,
    opacity: 0.8,
  },
})

export default Button
