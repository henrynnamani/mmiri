import CustomButton from '@/components/CustomButton';
import TextField from '@/components/TextField';
import { places } from '@/constant/places';
import { Stack, router } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from '@/components/ui/select';
import { ChevronDownIcon } from '@/components/ui/icon';
import { vendors } from '@/constant/vendor';

export default function SelectRoom() {
  return (
    <View className="flex h-screen items-center justify-center bg-white p-5">
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
                </View>
              </SafeAreaView>
            );
          },
        }}
      />
      <View className="w-full flex-1 items-center justify-center gap-10">
        <FlatList
          data={vendors}
          contentContainerStyle={{ gap: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity className="flex w-full gap-5 rounded-lg border border-gray-200 bg-white p-10 shadow-sm">
              <View className="w-full flex-row items-center justify-between">
                <Text className="text-xl font-semibold">{item.name}</Text>
                <Text>{item.price}/gal</Text>
              </View>
              <Text>Minimum order: 6</Text>
            </TouchableOpacity>
          )}
        />
        <CustomButton
          label="Next"
          outlined
          onPress={() => router.push('/(root)/order-process/view-vendors')}
        />
      </View>
    </View>
  );
}
