import React from 'react'
import {Dimensions, StyleSheet, Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import Button from './Button'
import {RootStackNavigationProp} from '../navigation/navigation.type'

export function ListEmpty({showButton = true}) {
  const navigation = useNavigation<RootStackNavigationProp>()

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        Ups, aún no has {'\n'}agregado ningún link
      </Text>
      {showButton && (
        <Button
          title="+ Agregar contenido"
          onPress={() => navigation.push('AddRssLink')}
        />
      )}
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
