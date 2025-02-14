import { ImageBackground, StatusBar, Text, View } from 'react-native';
import styles from "./styles";

const Lap52 = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground source={require('../images/can.png')}
                style={styles.image}>
                <View  style = {styles.details}>
                    <Text>get started</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Lap52;
