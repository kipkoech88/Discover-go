import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import ProductList from './components/ProductList';

export default function App() {
  const {colorScheme, toggleColorScheme } = useColorScheme();

  return (
      <SafeAreaView className="flex-1 bg-gray-200 items-center justify-center dark:bg-black pt-10">
        <View className="flex-row gap-5 w-full">
          <Text className="dark:text-white font-bold text-2xl">New Collections</Text>
          <Switch
          value={colorScheme === "dark"}
          onChange={toggleColorScheme}
          />
        </View>
        <ProductList/>
        <StatusBar style={colorScheme === "dark"? "light": "dark"} />
      </SafeAreaView>
  );
}

