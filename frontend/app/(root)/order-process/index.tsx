import CustomButton from '@/components/CustomButton';
import TextField from '@/components/TextField';
import { places } from '@/constant/places';
import { Stack, router } from 'expo-router';
import { useState } from 'react';
import { FlatList, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
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
import ReactNativeModal from 'react-native-modal';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(places[0]);
  const [modal, setModal] = useState(false);

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
      <View className="w-full flex-1 gap-10 p-10">
        <View className="w-full gap-2">
          <Text className="font-semibold text-gray-500">Select Location</Text>
          <Select className="w-full">
            <SelectTrigger
              variant="outline"
              size="md"
              className="flex items-center justify-between p-2">
              <SelectInput placeholder="Select Location" />
              <SelectIcon className="" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="HillTop" value="ux" />
                <SelectItem label="Odenigwe" value="web" />
                <SelectItem label="Odenigbo" value="Cross Platform Development Process" />
                <SelectItem label="Behind Flat" value="ui" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </View>
        <View className="w-full gap-2">
          <Text className="font-semibold text-gray-500">Select Lodge</Text>
          <Select className="w-full">
            <SelectTrigger
              variant="outline"
              size="md"
              className="flex items-center justify-between p-2">
              <SelectInput placeholder="Select Lodge" />
              <SelectIcon className="" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Solomon" value="ux" />
                <SelectItem label="Udify" value="web" />
                <SelectItem label="St Agnes" value="Cross Platform Development Process" />
                <SelectItem label="Paris" value="ui" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </View>
        <CustomButton label="Next" outlined onPress={() => setModal(true)} />
      </View>
      <ReactNativeModal isVisible={modal} onBackdropPress={() => setModal(false)}>
        <View className="min-h-[200px] gap-10 rounded-2xl bg-white px-7 py-9">
          <Text className="font-JakartaBold mb-2 text-2xl">Enter Room Number?</Text>
          <TextField label="e.g 32: " />

          <CustomButton
            label="Proceed"
            onPress={() => {
              setModal(false);
              router.push('/(root)/order-process/view-vendors');
            }}
          />
        </View>
      </ReactNativeModal>
    </View>
  );
}
