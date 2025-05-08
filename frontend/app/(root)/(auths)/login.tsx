import { View, Text, SafeAreaView } from 'react-native';
import CustomButton from '@/components/CustomButton';
import TextField from '@/components/TextField';
import { Link } from 'expo-router';

const Login = () => {
  return (
    <SafeAreaView>
      <View className="flex h-[80vh] w-full items-center justify-center gap-y-8 p-8">
        <View className="flex items-center justify-center">
          <Text className="text-main font-lobster p-2 text-5xl">Mmiri</Text>
          <Text className="text-lg font-semibold">Welcome back</Text>
        </View>
        <TextField label="Email" />
        <TextField label="Password" secureEntry />
        <CustomButton />
        <Link className="touch-none select-none" href="/(root)/(auths)/signup">
          Don't have an account? Register
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Login;
