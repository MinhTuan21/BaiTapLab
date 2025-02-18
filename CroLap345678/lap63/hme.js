import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  button: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderColor: '#6200ea',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: '80%',
    borderRadius: 8,
  },
  greetingText: {
    fontFamily: 'Roboto-Bold', 
    fontSize: 24, 
    color: '#333',
  },
});

export default styles;
