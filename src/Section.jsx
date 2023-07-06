import React from 'react'
import {StyleSheet, View} from 'react-native'

export function Section({children}) {
  return <View style={sectionStyles.section} children={children} />
}

const sectionStyles = StyleSheet.create({
  section: {margin: 10},
})

export default Section
