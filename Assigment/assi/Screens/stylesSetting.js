import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 20,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#ddd",
  },

  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },

  address: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },

  birthdate: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
  },

  editProfileButton: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 15,
  },

  editProfileText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  logoutButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  // Dark mode styles
  darkContainer: {
    backgroundColor: "#121212",
  },

  darkText: {
    color: "#fff",
  },

  darkLogoutButton: {
    backgroundColor: "#c0392b",
  },
});
