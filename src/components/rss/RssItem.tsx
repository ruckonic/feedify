import React from 'react'
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native'

interface RssItemProps {
  title: string
  link: string
}

export function RssItem({title, link}: RssItemProps) {
  return (
    <TouchableHighlight
      underlayColor="#eee"
      onPress={() => {
        console.log('Pressed')
      }}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.link}>{link}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 16,
    paddingHorizontal: 26,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily: 'Inter Bold',
  },
  link: {
    fontFamily: 'Inter',
    fontSize: 12,
    color: 'gray',
  },
})
export default RssItem
