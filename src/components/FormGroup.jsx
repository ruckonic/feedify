import React from 'react'
import {StyleSheet, View} from 'react-native'

/**
 *
 * @param {import('react-native').ViewProps} props
 */
export function FormGroup({style, ...props}) {
  return <View style={StyleSheet.compose(styles.formGroup, style)} {...props} />
}

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 16,
  },
})

export default FormGroup
