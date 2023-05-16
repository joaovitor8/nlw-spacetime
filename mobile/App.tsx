import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 bg-gray-950">
      <StatusBar style="light" translucent />
      <Text className="text-gray-50-50">Hello</Text>
    </View>
  )
}
