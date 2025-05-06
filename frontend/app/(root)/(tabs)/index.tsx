import { Stack } from 'expo-router';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <View style={styles.container}>
        <Text>Hello world</Text>
        <Text>How are you all doing?</Text>
        <TouchableOpacity className="w-fit border border-blue-300 p-3">
          <Text className="text-lg font-bold">Buy me</Text>
        </TouchableOpacity>
        <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
