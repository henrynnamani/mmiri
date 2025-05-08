import CustomButton from '@/components/CustomButton';
import TextField from '@/components/TextField';
import { places } from '@/constant/places';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { FlatList, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(places[0]);

  return (
    <View className="flex h-screen items-center justify-center bg-white">
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Mmiri',
          header: () => {
            return (
              <SafeAreaView className="bg-white">
                <View className="gap-8 border-b border-gray-100 p-5">
                  <Text className="text-center font-lobster text-3xl font-semibold text-main">
                    Mmiri
                  </Text>
                  {/* <TextField label="Search" /> */}
                  {/* <FlatList
                    data={places}
                    contentContainerStyle={{ gap: 10 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => setActiveIndex(item)}>
                        <View
                          className={`rounded-lg p-2 ${activeIndex === item ? 'bg-main border-main' : 'border border-gray-200'}`}>
                          <Text className={`font-medium ${activeIndex === item && 'text-white'}`}>
                            {item}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  /> */}
                </View>
              </SafeAreaView>
            );
          },
        }}
      />
      {/* <FlatList /> */}
      <View className="flex w-full items-center justify-center gap-10 p-10">
        <Text className="text-lg font-medium">Do you need water?</Text>
        <CustomButton label="Order Now" onPress={() => {}} />
      </View>
    </View>
  );
}
