import React, {useContext} from 'react'
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from 'react-native'
import {HeaderAnimationContext} from '../providers/header-animation'
import {RootStackScreenProps} from '../navigation/navigation.type'

export function Header({navigation, route}: RootStackScreenProps) {
  const animateValue = useContext(HeaderAnimationContext)

  const headerImageContainerPadding =
    animateValue?.interpolate({
      inputRange: [0, styles.headerImageContainer.paddingBottom],
      outputRange: [styles.headerImageContainer.paddingBottom, 0],
      extrapolate: 'clamp',
    }) ?? styles.headerImageContainer.paddingBottom

  const headerWidth =
    animateValue?.interpolate({
      inputRange: [0, styles.headerImage.width],
      outputRange: [styles.headerImage.width, 0],
      extrapolate: 'clamp',
    }) ?? styles.headerImage.width

  return (
    <SafeAreaView style={styles.headerContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#1F4690" />

      <Animated.View
        style={[
          styles.headerImageContainer,
          {paddingBottom: headerImageContainerPadding},
        ]}>
        <Animated.Image
          style={[styles.headerImage, {width: headerWidth}]}
          source={require('../assets/images/feedify-large-logo.png')}
        />
      </Animated.View>

      <View style={styles.headerButtonContainer}>
        <HeaderButton
          title="Contenido"
          active={route.name === 'Feeds'}
          onPress={() => navigation.navigate('Feeds')}
        />
        <HeaderButton
          title="Listado"
          active={route.name === 'RssList'}
          onPress={() => navigation.navigate('RssList')}
        />
      </View>
    </SafeAreaView>
  )
}

interface HeaderButtonProps {
  title: string
  onPress?: () => void
  active?: boolean
}

function HeaderButton({
  title,
  onPress = () => {},
  active = false,
}: HeaderButtonProps) {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.headerButton, active && styles.buttonActive]}>
          <Text style={[styles.textBold, active && styles.textWhite]}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#1F4690',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 10,
    paddingTop: Platform.select({ios: 8, android: 20}),
    alignItems: 'center',
  },
  headerButtonContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 8,
    marginHorizontal: 26,
    marginBottom: 26,
    padding: 8,
    borderRadius: 10,
  },
  buttonWrapper: {
    flex: 1,
  },
  headerButton: {
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonActive: {
    backgroundColor: '#1F4690',
    color: 'white',
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Inter',
    color: '#1F4690',
  },
  textWhite: {
    color: '#F9FAFB',
  },
  headerImageContainer: {
    paddingBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    objectFit: 'contain',
    width: 140,
    height: undefined,
    aspectRatio: 14 / 3,
  },
})

export default Header
