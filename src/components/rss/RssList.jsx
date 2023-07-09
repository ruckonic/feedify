import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import ListEmpty from '../ListEmpty'
import RssItem from './RssItem'

function ItemSeparator() {
  return <View style={styles.itemSeparator} />
}

export function RssList({onScroll = () => {}}) {
  return (
    <FlatList
      onScroll={onScroll}
      scrollEventThrottle={16}
      contentContainerStyle={styles.contentList}
      ItemSeparatorComponent={ItemSeparator}
      data={[
        {title: 'Xataca', link: 'https://xataka.com'},
        {title: 'BBC', link: 'https://bbc.com'},
        {title: 'El País', link: 'https://elpais.com'},
        {title: 'El Mundo', link: 'https://elmundo.com'},
        {title: 'El Confidencial', link: 'https://elconfidencial.com'},
        {title: 'El Español', link: 'https://elespanol.com'},
        {title: 'Xataca', link: 'https://xataka.com'},
        {title: 'BBC', link: 'https://bbc.com'},
        {title: 'El País', link: 'https://elpais.com'},
        {title: 'El Mundo', link: 'https://elmundo.com'},
        {title: 'El Confidencial', link: 'https://elconfidencial.com'},
        {title: 'El Español', link: 'https://elespanol.com'},
        {title: 'Xataca', link: 'https://xataka.com'},
        {title: 'BBC', link: 'https://bbc.com'},
        {title: 'El País', link: 'https://elpais.com'},
        {title: 'El Mundo', link: 'https://elmundo.com'},
        {title: 'El Confidencial', link: 'https://elconfidencial.com'},
        {title: 'El Español', link: 'https://elespanol.com'},
        {title: 'Xataca', link: 'https://xataka.com'},
        {title: 'BBC', link: 'https://bbc.com'},
        {title: 'El País', link: 'https://elpais.com'},
        {title: 'El Mundo', link: 'https://elmundo.com'},
        {title: 'El Confidencial', link: 'https://elconfidencial.com'},
        {title: 'El Español', link: 'https://elespanol.com'},
      ]}
      renderItem={({item}) => <RssItem {...item} />}
      ListEmptyComponent={ListEmpty}
    />
  )
}

const styles = StyleSheet.create({
  contentList: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  itemSeparator: {
    height: 1,
    backgroundColor: '#eee',
  },
})

export default RssList
