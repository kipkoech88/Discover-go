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
            <View>
                <Image
                source={{uri : image}}
                className="w-full h-72"
                />
            </View>
            <Text>{title}</Text>
            <Text>{description} </Text>
            <Text>{price} </Text>
        </View>
    );
}

export default ProductCard;