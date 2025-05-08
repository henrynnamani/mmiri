import { View, Text, SafeAreaView } from 'react-native';
import CustomButton from '@/components/CustomButton';
import TextField from '@/components/TextField';
import { Link } from 'expo-router';

const Signup = () => {
  return (
    <SafeAreaView>
      <View className="flex h-[80vh] w-full items-center justify-center gap-y-8 p-8">
        <View className="flex items-center justify-center">
          <Text className="text-main font-lobster p-2 text-5xl">Mmiri</Text>
          <Text className="text-lg font-semibold">Create an account</Text>
        </View>
        <TextField label="Email" />
        <TextField label="Password" secureEntry />
        <CustomButton label="Register" onPress={() => {}} />
        <Link className="touch-none select-none" href="/(root)/(auths)/login">
          Already have an account? Login
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
