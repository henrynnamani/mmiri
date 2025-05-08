import { KeyboardAvoidingView, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

const TextField = ({ label, secureEntry }: ITextField) => {
  const [visible, setVisible] = useState(false);

  return (
    <KeyboardAvoidingView className="w-full">
      <View className="flex-row items-center justify-between rounded-lg border border-gray-300 p-4">
        <TextInput className="flex-1" placeholder={label} secureTextEntry={visible} />
        {secureEntry &&
          (visible ? (
            <TouchableOpacity onPress={() => setVisible((prev) => !prev)}>
              <Ionicons name="eye-off-outline" size={20} color="gray" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setVisible((prev) => !prev)}>
              <Ionicons name="eye-outline" size={20} color="gray" />
            </TouchableOpacity>
          ))}
      </View>
    </KeyboardAvoidingView>
  );
};

export default TextField;
