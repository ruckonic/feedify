import React from 'react'
import {StyleSheet, Text} from 'react-native'

interface LabelProps extends React.ComponentProps<typeof Text> {}

export function _Label({style, ...props}: LabelProps, ref: React.Ref<Text>) {
  return (
    <Text
      style={StyleSheet.compose(styles.label, style)}
      {...props}
      ref={ref}
    />
  )
}

export const Label = React.forwardRef<Text, LabelProps>(_Label)

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Inter',
    fontSize: 16,
    marginBottom: 8,
    color: '#374151',
  },
})

export default Label
