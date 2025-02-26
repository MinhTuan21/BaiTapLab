import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet
} from "react-native";
import { forgotPassword } from "../api/auth";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert("Lỗi", "Vui lòng nhập email!");
      return;
    }

    try {
      const response = await forgotPassword(email);
      Alert.alert(" Thành công", response.message);
    } catch (error) {
      Alert.alert(" Lỗi", "Không thể gửi OTP, vui lòng thử lại sau.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quên mật khẩu?</Text>
      <Text style={styles.subtitle}>
        Nhập email của bạn để nhận mã OTP đặt lại mật khẩu.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập email của bạn"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Gửi OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#333",
    marginBottom: 15,
  },
  button: {
    width: "100%",
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
