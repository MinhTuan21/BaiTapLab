import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const Lab43 = ({ navigation }) => {  // Nhận navigation từ React Navigation

  const [isPasswordShown, setIsPasswordShown] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Hi Welcome MinhTuan! 👋</Text>
        <Text style={styles.label}>Email address</Text>
        <TextInput placeholder="Enter your email address" style={styles.input} />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={isPasswordShown}
            style={styles.passwordInput}
          />
          <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)} style={styles.eyeIcon}>
            <Ionicons name={isPasswordShown ? "eye-off" : "eye"} size={24} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.logins}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Text style={styles.orLogin}>Or Login with</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity>
            <Ionicons name="logo-facebook" size={40} color="#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="logo-google" size={40} color="#DB4437" />
          </TouchableOpacity>
        </View>

        <Text style={styles.registerText}>
          Don’t have an account? 
          <Text style={styles.registerLink} onPress={() => navigation.navigate("Register")}>
            Register
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Lab43;
