import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text1: {
        marginTop: StatusBar.currentHeight,
        fontSize: 20,
        fontFamily: "Poppins-Regular",
        color: "#000000"
    },
    text2: {
        marginTop: StatusBar.currentHeight,
        fontSize: 20,
        fontFamily: "Poppins-Bold",
        color: "#000000"
    }
});

export default styles;
