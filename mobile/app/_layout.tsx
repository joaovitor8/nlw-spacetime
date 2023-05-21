import { StatusBar } from 'expo-status-bar' //Parte onde fica as informações do celular (Hora, carregamento, ...)
import { ImageBackground } from 'react-native' //Componente do ReactNative
import { SplashScreen, Stack } from 'expo-router' //Rota
import { useEffect, useState } from 'react' //Hooks do react
import * as SecureStore from 'expo-secure-store' //Segurança

import { styled } from 'nativewind' //Integração do ReactNative com tailwind
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto' //Fonte
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree' //Fonte
import blurBg from '../src/assets/bg-blur.png' //Asset
import Stripes from '../src/assets/stripes.svg' //Asset

const StyledStripes = styled(Stripes)

export default function Layout() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<null | boolean>(null) //Autentificação

  const [hasLoadedFonts] = useFonts({ Roboto_400Regular, Roboto_700Bold, BaiJamjuree_700Bold }) //Fontes

  useEffect(() => { //Autentificação
    SecureStore.getItemAsync('token').then((token) => {
      setIsUserAuthenticated(!!token)
    })
  }, [])

  if (!hasLoadedFonts) {
    return <SplashScreen />
  }

  return (
    <ImageBackground source={blurBg} className="relative flex-1 bg-gray-900" imageStyle={{ position: 'absolute', left: '-100%' }}>
      <StatusBar style="light" translucent />
      <StyledStripes className="absolute left-2" />

      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'transparent' }, animation: 'fade' }}>
        <Stack.Screen name="index" redirect={isUserAuthenticated} />
        <Stack.Screen name="memories" />
        <Stack.Screen name="new" />
      </Stack>
    </ImageBackground>
  )
}
