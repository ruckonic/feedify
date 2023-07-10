import React from 'react'
import {StyleSheet, TextInput as RTCTextInput} from 'react-native'

/**
 *
 * @param {import('react-native').TextInputProps} props
 */
export function TextInput(props) {
  return <RTCTextInput style={styles.textInput} {...props} />
}

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
