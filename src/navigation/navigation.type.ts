import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
declare global {
  namespace ReactNavigation {
    interface RootParamList {}
  }
}

export type RootStackParamList = {
  [K in keyof ReactNavigation.RootParamList]: ReactNavigation.RootParamList[K]
}

export type RootStackScreenProps<
  T extends keyof ReactNavigation.RootParamList = keyof ReactNavigation.RootParamList,
> = NativeStackScreenProps<RootStackParamList, T>

export type RootStackNavigationProp<
  T extends keyof ReactNavigation.RootParamList = keyof ReactNavigation.RootParamList,
> = NativeStackNavigationProp<RootStackParamList, T>
