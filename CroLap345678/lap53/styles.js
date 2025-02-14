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
    marginTop:520,
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 30,
    color: 'red',
    zIndex: 1,
  },
  rating: {
    marginTop:550,
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 30,
    color: 'yellow',
    zIndex: 1,
  },
  contentWrapper: {
    flex: 3, 
    backgroundColor: '#fff', 
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 0,
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
    fontSize: 18,
    color: '#0066cc',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default styles;
