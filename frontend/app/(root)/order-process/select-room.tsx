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

export default function SelectRoom() {
  return (
    <View className="flex h-screen bg-white">
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
      <View className="w-full flex-1 items-center justify-center gap-10 p-10">
        <KeyboardAvoidingView className="w-full gap-2">
          <Text className="font-semibold text-gray-500">Enter your Room number</Text>
          <TextField label="Enter room number e.g 15" />
        </KeyboardAvoidingView>
        <CustomButton
          label="Next"
          outlined
          onPress={() => router.push('/(root)/order-process/view-vendors')}
        />
      </View>
    </View>
  );
}
