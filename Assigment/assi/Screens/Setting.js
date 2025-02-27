import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "./UserContext";
import styles from "./stylesSetting";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const { userData } = useContext(UserContext);

  const handleLogout = () => {
    Alert.alert("Đăng xuất", "Bạn có chắc muốn đăng xuất?", [
      { text: "Hủy", style: "cancel" },
      { text: "Đăng xuất", onPress: () => navigation.replace("Login") },
    ]);
  };

  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: userData?.avatar || "https://via.placeholder.com/100" }}
        style={styles.profileImage}
      />

     
      <Text style={styles.username}>{userData?.name || "Tên người dùng"}</Text>
      <Text style={styles.address}>{userData?.address || "Chưa có địa chỉ"}</Text>
      <Text style={styles.birthdate}>
        {userData?.birthdate ? new Date(userData.birthdate).toLocaleDateString() : "Chưa có ngày sinh"}
      </Text>

   
      <TouchableOpacity style={styles.editProfileButton} onPress={() => navigation.navigate("EditFrofile")}>
        <Text style={styles.editProfileText}>Cập nhật thông tin</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
