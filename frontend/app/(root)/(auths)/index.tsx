import { View, Text, SafeAreaView, Image } from 'react-native';
import { Link } from 'expo-router';
import Swiper from 'react-native-swiper';
import { onboardings } from '@/constant/onboarding';

const Onboarding = () => {
  return (
    <SafeAreaView className="flex h-screen w-full items-center justify-center gap-8">
      {/* <Text>Hello world</Text> */}
      <Swiper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {onboardings?.map((onboarding, index) => (
          <View key={index} className="flex items-center justify-center p-6">
            <Image
              source={onboarding.image}
              className="h-80 w-80 rounded-full"
              resizeMode="cover"
            />
            <Text className="text-xl font-semibold">{onboarding?.title}</Text>
            <Text className="text-md">{onboarding?.description}</Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;
