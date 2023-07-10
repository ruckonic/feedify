import React from 'react'
import {StyleSheet, Text} from 'react-native'

/**
 *
 * @param {import('react-native').TextProps} props
 */
export function Label({style, ...props}) {
  return <Text style={StyleSheet.compose(styles.label, style)} {...props} />
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Inter',
    fontSize: 16,
    marginBottom: 8,
    color: '#374151',
  },
})

export default Label
