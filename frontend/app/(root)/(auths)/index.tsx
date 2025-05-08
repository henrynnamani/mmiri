import CustomButton from '@/components/CustomButton';
import { onboardings } from '@/constant/onboarding';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

const Onboarding = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between space-y-5 bg-white p-10">
      <TouchableOpacity
        onPress={() => router.push('/(root)/(tabs)')}
        className="flex w-full items-end justify-end p-4">
        <Text className="font-roboto text-md text-gray-300">Skip</Text>
      </TouchableOpacity>
      <Swiper
        loop={false}
        paginationStyle={{ bottom: 60 }}
        dot={<View className="mx-1 h-[8px] w-[8px] rounded-full bg-[#E2E8F0]" />}
        activeDot={<View className="bg-main mx-1 h-[4px] w-[16px] rounded-full" />}>
        {onboardings.map((item, index) => (
          <View key={index} className="flex items-center justify-center p-4">
            <Image
              source={item.image}
              className="h-[300px] w-[300px] rounded-lg bg-transparent"
              resizeMode="contain"
            />
            <View className="mt-10 flex w-full flex-row items-center justify-center">
              <Text className="mx-10 text-center text-3xl font-bold text-black">{item.title}</Text>
            </View>
            <Text className="text-md mx-10 mt-3 text-center text-[#858585]">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton label="Get Started" onPress={() => router.push('/(root)/(auths)/signup')} />
    </SafeAreaView>
  );
};

export default Onboarding;
