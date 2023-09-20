import React from 'react'
import {StyleSheet, TextInput as RTCTextInput} from 'react-native'

interface TextInputProps extends React.ComponentProps<typeof RTCTextInput> {}

/**
 *
 * @param {import('react-native').TextInputProps} props
 */
export function _TextInput(
  {style, ...props}: TextInputProps,
  ref: React.Ref<RTCTextInput>,
) {
  return (
    <RTCTextInput
      style={StyleSheet.compose(styles.textInput, style)}
      ref={ref}
      {...props}
    />
  )
}

export const TextInput = React.forwardRef<RTCTextInput, TextInputProps>(
  _TextInput,
)

const styles = StyleSheet.create({
  textInput: {
    height: 54,
    borderRadius: 8,
    paddingHorizontal: 16,
    elevation: 1,
    backgroundColor: 'white',
  },
})

export default TextInput
