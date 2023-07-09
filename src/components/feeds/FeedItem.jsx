import React from 'react'
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native'

export function FeedItem({title, image, publishedAt, author}) {
  return (
    <TouchableHighlight
      onPress={() => {
        console.log('Pressed')
      }}>
      <View style={styles.feedItem}>
        <View style={styles.feedDetails}>
          <Text style={styles.feedItemTitle}>{title}</Text>
          <Text style={styles.feedItemAuthor}> • {author}</Text>
        </View>
        <Image style={styles.feedItemImage} source={{uri: image}} />
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  feedItem: {
    paddingHorizontal: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    gap: 16,
    marginVertical: 8,
  },
  feedDetails: {
    flex: 1,
  },
  feedItemTitle: {
    fontSize: 16,
    marginBottom: 4,
    fontFamily: 'Inter',
  },
  feedItemAuthor: {
    fontFamily: 'Inter',
    fontSize: 12,

    color: 'gray',
  },
  feedItemImage: {
    borderRadius: 10,
    width: 96,
    objectFit: 'cover',
    height: 76,
  },
})

export default FeedItem
