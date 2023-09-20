import React, {useLayoutEffect} from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native'
import {useHeaderHeight} from '@react-navigation/elements'
import {SafeAreaView} from 'react-native-safe-area-context'

import FormGroup from '../components/FormGroup'
import Label from '../components/Label'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import type {RootStackScreenProps} from '../navigation/navigation.type'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      AddRssLink: undefined
    }
  }
}

export function AddRssLinkScreen({
  navigation,
}: RootStackScreenProps<'AddRssLink'>) {
  const headerHeight = useHeaderHeight()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Nuevo link',
    })
  }, [navigation])

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        {paddingTop: headerHeight + styles.container.paddingTop},
      ]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      onTouchStart={Keyboard.dismiss}>
      <SafeAreaView />
      <View style={styles.formContainer}>
        <FormGroup>
          <Label>Ingresar URL</Label>
          <TextInput keyboardType="url" dataDetectorTypes="link" />
        </FormGroup>

        <FormGroup>
          <Label>Nombre (opcional)</Label>
          <TextInput />
        </FormGroup>
      </View>
      <SafeAreaView style={styles.buttonContainer} edges={['bottom']}>
        <Button
          title="Guardar"
          style={styles.button}
          textStyles={styles.textButton}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingTop: 32,
    flex: 1,
  },
  formContainer: {
    flex: 1,
  },
  buttonContainer: {
    paddingBottom: 8,
  },
  button: {
    backgroundColor: '#1F4690',
    height: 54,
  },
  textButton: {
    color: 'white',
  },
})

export default AddRssLinkScreen
