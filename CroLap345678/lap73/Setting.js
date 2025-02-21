import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";

const DatVeScreen = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.header, isDarkMode && styles.darkText]}>Cài Đặt</Text>

      {/* Tùy chọn bật/tắt thông báo */}
      <View style={styles.option}>
        <Text style={[styles.optionText, isDarkMode && styles.darkText]}>Nhận thông báo</Text>
        <Switch
          value={isNotificationEnabled}
          onValueChange={() => setIsNotificationEnabled(!isNotificationEnabled)}
        />
      </View>

      {/* Tùy chọn đổi giao diện Dark Mode */}
      <View style={styles.option}>
        <Text style={[styles.optionText, isDarkMode && styles.darkText]}>Chế độ tối</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
        />
      </View>

      {/* Nút Đăng xuất (ví dụ) */}
      <TouchableOpacity style={[styles.logoutButton, isDarkMode && styles.darkButton]}>
        <Text style={[styles.logoutText, isDarkMode && styles.darkText]}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  darkContainer: { backgroundColor: "#121212" }, // Nền tối
  header: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  darkText: { color: "white" }, // Chữ màu trắng trong dark mode
  option: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  optionText: { fontSize: 18 },
  logoutButton: { backgroundColor: "#ff4d4d", padding: 12, borderRadius: 5, alignItems: "center", marginTop: 20 },
  darkButton: { backgroundColor: "#d32f2f" }, // Màu nút tối hơn khi Dark Mode
  logoutText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default DatVeScreen;
