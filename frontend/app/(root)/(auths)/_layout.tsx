import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'signup',
};

export default function RootLayout() {
  return (
    <Stack initialRouteName="signup">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
    </Stack>
  );
}
