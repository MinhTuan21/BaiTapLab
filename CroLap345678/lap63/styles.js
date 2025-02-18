import { StyleSheet } from 'react-native';

export const drawerStyles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  footer: {
    padding: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  version: {
    fontSize: 12,
    color: 'gray',
  },
  
});
