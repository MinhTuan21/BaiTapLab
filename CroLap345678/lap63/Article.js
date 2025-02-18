import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ArticleScreen = ({navigation}) => {
  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity 
            style={{ position: 'absolute', top: 50, left: 20 }} 
            onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={30} color="black" />
          </TouchableOpacity>
          <Text>Article Screen</Text>
        </View>
  );
};

export default ArticleScreen;
