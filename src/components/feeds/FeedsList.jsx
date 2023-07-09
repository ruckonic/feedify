import React from 'react'
import {StyleSheet, Text, SectionList} from 'react-native'
import ListEmpty from '../ListEmpty'
import FeedItem from './FeedItem'

export const FeedsList = React.forwardRef(function FeedsList(
  {onScroll = () => {}},
  ref,
) {
  return (
    <SectionList
      ref={ref}
      onScroll={onScroll}
      scrollEventThrottle={16}
      stickyHeaderHiddenOnScroll={false}
      keyExtractor={item => item.id}
      renderItem={({item}) => <FeedItem {...item} />}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.sectionText}>{title}</Text>
      )}
      sections={
        [
          // {
          //   data: [
          //     {
          //       id: 1,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //     {
          //       id: 2,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //     {
          //       id: 3,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //     {
          //       id: 4,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //     {
          //       id: 5,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //     {
          //       id: 6,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //     {
          //       id: 7,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //     {
          //       id: 8,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //   ],
          //   title: 'Most Popular',
          // },
          // {
          //   data: [
          //     {
          //       id: 1,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //     {
          //       id: 2,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //     {
          //       id: 3,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //     {
          //       id: 4,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //     {
          //       id: 5,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //     {
          //       id: 6,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //     {
          //       id: 7,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //     {
          //       id: 8,
          //       title:
          //         'Musk annoys Twitter users by capping number of tweets they can view each dat',
          //       image: 'https://picsum.photos/200/300',
          //       author: 'Technica - All content / 3h',
          //       publishedAt: '2021-05-31T15:00:00Z',
          //     },
          //   ],
          //   title: 'Other Most Popular',
          // },
        ]
      }
      ListEmptyComponent={ListEmpty}
    />
  )
})

const styles = StyleSheet.create({
  sectionText: {
    paddingHorizontal: 26,
    paddingTop: 42,
    paddingBottom: 8,
    backgroundColor: 'white',
    fontSize: 16,
    flex: 1,
    color: '#1F4690',
  },
})

export default FeedsList
