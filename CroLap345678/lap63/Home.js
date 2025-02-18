import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './hme';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState(''); 

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={30} style={styles.buttonIcon} />
      </TouchableOpacity>
      
      <TextInput 
        style={styles.input}
        placeholder="Nhập tên của bạn"
        onChangeText={setName}
        value={name}
      />
      
      {name ? (
        <Text style={styles.greetingText}>
          Chào bạn {name}!
        </Text>
      ) : (
        <Text style={styles.greetingText}>
          Chào bạn!
        </Text>
      )}
    </View>
  );
};

export default HomeScreen;
