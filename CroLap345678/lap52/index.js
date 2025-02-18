import { ImageBackground, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import styles from "./styles";

const Lap52 = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground source={require('../images/can.png')} style={styles.image}>
                <View style={styles.content}>
                    <Text style={styles.title}>Discover world with us</Text>
                    <Text style={styles.subtitle}>
                        Learn more about amazing places and experiences that 
                        lead to great adventures. 
                    </Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Lap52;
