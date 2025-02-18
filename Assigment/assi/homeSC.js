import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // ===== Container & Layout =====
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e", // Màu nền tối
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },

  // ===== Text Styles =====
  title: { 
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    textAlign: "center",
    color: "#bbb",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },

  // ===== Input Styles =====
  input: {
    borderWidth: 1,
    borderColor: "#888",
    backgroundColor: "#2a2a2a",
    padding: 12,
    borderRadius: 8,
    color: "#fff",
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 8,
    backgroundColor: "#2a2a2a",
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    color: "#fff",
  },
  eyeIcon: {
    padding: 10,
  },

  // ===== Buttons =====
  logins: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "#f44336",
    padding: 15,
  },
  loginsText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#ffa500",
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
  addToCartButton: {
    backgroundColor: "#FFA500",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  addToCartText: {
    color: "#fff",
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 10,
    alignItems: "center",
  },
  backText: {
    color: "#FFA500",
    fontWeight: "bold",
  },

  // ===== Social Login =====
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },

  // ===== Product Card =====
  productCard: {
    backgroundColor: "#333",
    margin: 10,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    width: "45%", // Giữ khoảng cách đều khi hiển thị 2 cột
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
  productPrice: {
    color: "#FFA500",
    marginTop: 2,
    fontSize: 16,
    fontWeight: "600",
  },

  // ===== Product Detail =====
  detailImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    color: "#ddd",
    marginTop: 10,
    fontSize: 16,
  },
});

export default styles;
