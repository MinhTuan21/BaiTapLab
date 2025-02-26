import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Switch, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import styles from "./stylesSetting";


const SettingsScreen = () => {
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/100");

  const handleLogout = () => {
    Alert.alert("Đăng xuất", "Bạn có chắc muốn đăng xuất?", [
      { text: "Hủy", style: "cancel" },
      { text: "Đăng xuất", onPress: () => navigation.replace("Login") },
    ]);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      {/* Avatar - Chọn ảnh từ thư viện */}
      <TouchableOpacity onPress={pickImage}>
        <Image source={{ uri: avatar }} style={styles.profileImage} />
      </TouchableOpacity>

      <Text style={[styles.username, isDarkMode && styles.darkText]}>Minh Tuấn</Text>

      {/* Chế độ thông báo */}
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Thông báo</Text>
        <Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
      </View>
    
      {/* Chế độ nền tối */}
      <View style={styles.settingItem}>
        <Text style={[styles.settingText, isDarkMode && styles.darkText]}>Chế độ nền tối</Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>
      <TouchableOpacity 
        style={styles.editProfileButton} 
        onPress={() => navigation.navigate("EditFrofile")}
      >
        <Text style={styles.editProfileText}>Cập nhật thông tin</Text>
      </TouchableOpacity>
      {/* Nút đăng xuất */}
      <TouchableOpacity style={[styles.logoutButton, isDarkMode && styles.darkLogoutButton]} onPress={handleLogout}>
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
