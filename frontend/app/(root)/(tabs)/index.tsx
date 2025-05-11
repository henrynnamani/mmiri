import CustomButton from '@/components/CustomButton';
import TextField from '@/components/TextField';
import { places } from '@/constant/places';
import { Stack, router } from 'expo-router';
import { useState } from 'react';
import { FlatList, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(places[0]);

  return (
    <View className="flex h-screen bg-white p-10">
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
      {/* <FlatList /> */}
      <Text className="text-2xl font-medium">Hi Amara</Text>
      <View className="mt-10 flex w-full gap-5 space-y-8">
        <Text className="text-lg ">Need water today?</Text>
        <CustomButton label="Order Now" onPress={() => router.push('/(root)/order-process')} />
      </View>
    </View>
  );
}

// <ReactNativeModal
//           isVisible={quantityModal?.state}
//           onBackdropPress={() => setQuantityModal({
//             ...quantityModal,
//             state: false
//           })}
//         >
//           <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
//             <Text className="font-JakartaBold text-2xl mb-2">
//               How many would you like to get?
//             </Text>
//             <InputField
//               label="Code"
//               icon={icons.lock}
//               placeholderText='12345'
//               onChangeText={(value) => setQuantityModal({
//                 ...quantityModal,
//                 quantity: Number(value)
//               })}
//             />

//             <UniButton
//               title="Add to Cart"
//               onPress={addToCart}
//               className="mt-5 bg-success-500"
//             />
//           </View>
//         </ReactNativeModal>
