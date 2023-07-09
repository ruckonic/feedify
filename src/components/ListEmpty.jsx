import React from 'react'
import {Dimensions, StyleSheet, Text, View} from 'react-native'
import Button from './Button'

export function ListEmpty({showButton = true}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        Ups, aún no has {'\n'}agregado ningún link
      </Text>
      {showButton && <Button title="+ Agregar contenido" />}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 2,
    gap: 32,
  },

  text: {
    textAlign: 'center',
    fontSize: 16,
    maxWidth: 200,
  },
})

export default ListEmpty
