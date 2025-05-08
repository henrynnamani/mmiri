import '@/global.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

export const unstable_settings = {
  initialRouteName: '(root)',
};

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Lobster: require('../assets/fonts/Lobster-Regular.ttf'),
    Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
    RobotoSemibold: require('../assets/fonts/Roboto-SemiBold.ttf'),
    RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoExtraBold: require('../assets/fonts/Roboto-ExtraBold.ttf'),
    RobotoBlack: require('../assets/fonts/Roboto-Black.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
      </Stack>
    </GluestackUIProvider>
  );
}
