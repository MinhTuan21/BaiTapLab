import React, { useRef } from 'react';
import { Animated, ImageBackground, StatusBar, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

const Lap53 = () => {
    const scaleAnim = useRef(new Animated.Value(1)).current; // Giá trị scale mặc định là 1

    const handlePressHeart = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.5, 
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            })
        ]).start();
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground source={require('../images/vl.png')} style={styles.image}>
                <View style={styles.header}>
                    <TouchableWithoutFeedback onPress={handlePressHeart}>
                        <Animated.Text style={[styles.iconHeart, { transform: [{ scale: scaleAnim }] }]}>
                            &#10084;
                        </Animated.Text>
                    </TouchableWithoutFeedback>
                    <Text style={styles.rating}>★★★★★</Text>
                </View>+
                <View style={styles.contentWrapper}>
                    <ScrollView style={styles.body}>
                        <Text style={styles.bodyText}>
                            Nếu đây là cái giá phải trả để quét sạch những bi thương trong lòng, dùng phương pháp xóa bỏ đi hình bóng của Uyển Nhi để đạt đến Vấn Đỉnh, thì đạo của ta là gì? Đạo của ta từ lúc còn sống đến khi chết đi cho đến khi ngủ say vĩnh cửu đều là Uyển Nhi. Nếu ta thật sự phải vỗ tay xuống, nàng sẽ vô tình trở thành Lô Đỉnh của ta...
                        </Text>
                    </ScrollView>
                    <View style={styles.footer}>
                        <Text style={styles.price}>Tiên Nghịch</Text>
                        <Text style={styles.bookButton}>Xem ngay</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Lap53;
