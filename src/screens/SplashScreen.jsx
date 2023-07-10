import React, {useEffect} from 'react'
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Text,
  SafeAreaView,
} from 'react-native'

export function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Feeds')
    }, 1000)
  }, [navigation])

  return (
    <View style={styles.wrapper}>
      <SafeAreaView />
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/feedify-logo.png')}
        />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.textFooter}>Power by Nerdify</Text>
      </View>
      <SafeAreaView />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignContent: 'center',
    width: '40%',
    height: undefined,
    aspectRatio: 107 / 99,
  },
  footerContainer: {
    padding: 10,
  },
  textFooter: {
    color: '#05375a',
    fontSize: 12,
  },
})

export default SplashScreen
