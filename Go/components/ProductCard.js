import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {AntDesign } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';


function ProductCard({
    image,
    category,
    title,
    price,
    description
}) {

    const [count, setCount] = useState(1);
    const { colorScheme } = useColorScheme()
    return (
        <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
            <View className="bg-white w-full rounded-xl">
                <Image
                resizeMode='contain'
                source={{uri : image}}
                className="w-full h-72"
                />
            </View>
            <View className="mt-5">
                <Text className="text-sm text-black/60 dark:text-white/70">{category}</Text>
                <Text className="text-lg font-semibold dark:text-white">{title}</Text>
                <View>
                    <AntDesign
                    name='minuscircleo'
                    size={24}
                    color={colorScheme === "dark"? "white": "black"}
                    onPress={()=>setCount(count - 1)}

                    />
                </View>
                <Text>{description} </Text>
                <Text>{price} </Text>
            </View>
        </View>
    );
}

export default ProductCard;