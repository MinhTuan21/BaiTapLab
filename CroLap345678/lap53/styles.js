import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        flex: 7,
        justifyContent: 'center',
        position: 'relative',
    },
    iconHeart: {
        position: 'absolute',
        top: 40,
        marginTop: 520,
        left: 25,
        fontSize: 30,
        color: 'red',
        zIndex: 1,
    },
    rating: {
        position: 'absolute',
        marginTop: 520,
        top: 40,
        right: 10,
        fontSize: 30,
        color: 'yellow',
        zIndex: 1,
    },
    contentWrapper: {
        flex: 3,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    body: {
        flex: 1,
        padding: 20,
    },
    bodyText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0066cc',
    },
    footer: {
        height: 60,
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bookButton: {
        backgroundColor: '#0066cc',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    bookButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

export default styles;
