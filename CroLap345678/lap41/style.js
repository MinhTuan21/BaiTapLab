import { StyleSheet, StatusBar } from 'react-native';

export const style = StyleSheet.create({
    containerView: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        padding: 10,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
        elevation: 7,
        padding: 15,
        borderRadius: 10,
    },
});