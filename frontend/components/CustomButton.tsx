import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ({ label, outlined, onPress }: ICustomButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${outlined ? 'border-main border' : 'bg-main'} w-full rounded-lg p-4`}>
      <Text className={`text-center font-semibold ${outlined ? 'text-main' : 'text-white'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
