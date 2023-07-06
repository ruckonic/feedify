import React from 'react'
import {
  ActivityIndicator,
  Alert,
  Button,
  Text,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  RefreshControl,
  Modal,
  Switch,
} from 'react-native'
import Section from './Section'

export function App() {
  const [open, setOpen] = React.useState(false)
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={false} />}>
      <Section>
        <Text>ActivityIndicator:</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </Section>

      <Section>
        <Text>Button:</Text>
        <Button title="Press me" onPress={() => Alert.alert('Pressed!')} />
      </Section>

      <Section>
        <Text>Image:</Text>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1688296472826-5b59d5854006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3135&q=80',
            width: 200,
            height: 200,
          }}
        />
      </Section>
      <Section>
        <Text>Image:</Text>
        <ImageBackground src="https://images.unsplash.com/photo-1688296472826-5b59d5854006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3135&q=80">
          <Text selectable>ImageBackground</Text>
          <Text>ImageBackground</Text>
          <Text>ImageBackground</Text>
          <Text>ImageBackground</Text>
          <Text>ImageBackground</Text>
        </ImageBackground>
      </Section>

      <Section>
        <TextInput placeholder="Type here to translate!" />
      </Section>

      <Section>
        <Text>Modal</Text>
        <Button title="Open Modal" onPress={() => setOpen(true)} />
        <Modal visible={open}>
          <Text>Modal</Text>
          <Button title="Close Modal" onPress={() => setOpen(false)} />
        </Modal>
      </Section>
    </ScrollView>
  )
}

export default App
