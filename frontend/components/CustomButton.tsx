import { Text, TouchableOpacity } from 'react-native';

const CustomButton = () => {
  return (
    <TouchableOpacity className="bg-main w-full rounded-lg p-4">
      <Text className="text-center font-semibold text-white">Press me</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
