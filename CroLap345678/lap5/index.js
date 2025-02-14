import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles"; 
import { useFonts } from 'expo-font';
const Lab51 = () => {
    const [fonts] =useFonts({
        'Poppins-Regular': require('../assets/font/DarumadropOne-Regular.ttf'),
    })
    if(!fonts)
    {
        return null;
    }
    return (
        <View>
            <Text style={styles.text}>Lab 5.1: Thay đổi màu nền và chữ sử dụng CSS</Text>
        </View>
    );
};

export default Lab51;
