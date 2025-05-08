import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';

const TabIcon = ({
  focused,
  name,
  label,
}: {
  focused: boolean;
  name: 'home-outline' | 'bag-check-outline';
  size?: number;
  label: string;
}) => {
  return (
    <View className="flex w-32 items-center justify-center gap-2">
      <Ionicons name={name} size={24} color={focused ? '#00BFFF' : 'black'} />
      <Text className={`${focused && 'font-bold text-main'}`}>{label}</Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          height: 78,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          position: 'absolute',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="home-outline" label="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="bag-check-outline" label="Order" />
          ),
        }}
      />
    </Tabs>
  );
}
