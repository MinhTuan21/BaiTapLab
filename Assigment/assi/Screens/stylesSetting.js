import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#f8f9fa" },
  darkContainer: { backgroundColor: "#121212" }, // Màu nền tối

  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },

  username: { fontSize: 18, fontWeight: "bold", marginBottom: 20, color: "#000" },
  darkText: { color: "#fff" }, // Màu chữ khi bật nền tối

  settingItem: { flexDirection: "row", justifyContent: "space-between", width: "80%", marginVertical: 10 },
  settingText: { fontSize: 16, color: "#000" },

  logoutButton: { backgroundColor: "#e74c3c", padding: 10, borderRadius: 8, marginTop: 20 },
  darkLogoutButton: { backgroundColor: "#c0392b" }, // Đổi màu nút khi nền tối

  logoutText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
