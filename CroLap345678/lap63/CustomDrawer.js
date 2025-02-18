import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { drawerStyles } from './styles';

const CustomDrawer = (props) => {
  const [avatar, setAvatar] = useState('https://i.pravatar.cc/100');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
     
      <View style={drawerStyles.header}>
        <TouchableOpacity onPress={pickImage}>
          <Image source={{ uri: avatar }} style={drawerStyles.avatar} />
        </TouchableOpacity>
        <Text style={drawerStyles.name}>Đỗ Văn Minh Tuấn</Text>
        <Text style={drawerStyles.email}>Tu1@gmail.com</Text>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      
      <View style={drawerStyles.footer}>
        <Text style={drawerStyles.version}>Phiên bản ứng dụng: 2.6.0</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
