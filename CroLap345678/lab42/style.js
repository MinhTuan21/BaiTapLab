import { StyleSheet, StatusBar } from "react-native";
export const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        padding: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 345,
    },
});