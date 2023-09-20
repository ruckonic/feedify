import React from 'react'
import {StyleSheet, View} from 'react-native'

interface FormGroupProps extends React.ComponentProps<typeof View> {}

/**
 * FormGroup component is a wrapper for form elements
 */
function _FormGroup({style, ...props}: FormGroupProps, ref: React.Ref<View>) {
  return (
    <View
      style={StyleSheet.compose(styles.formGroup, style)}
      {...props}
      ref={ref}
    />
  )
}

export const FormGroup = React.forwardRef<View, FormGroupProps>(_FormGroup)

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 16,
  },
})

export default FormGroup
