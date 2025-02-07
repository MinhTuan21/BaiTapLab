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
import styles from"./styles";

const Lab43 = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      styles={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Hi Welcome Back! 👋</Text>
        <Text style={styles.subtitle}>Hello again, you have been missed!</Text>

        {/* Email Input */}
        <Text style={styles.label}>Email address</Text>
        <TextInput placeholder="Enter your email address" styles={styles.input} />

        {/* Password Input */}
        <Text style={styles.label}>Password</Text>
        <View styles={styles.passwordContainer}>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={isPasswordShown}
            styles={styles.passwordInput}
          />
          <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)} style={styles.eyeIcon}>
            <Ionicons name={isPasswordShown ? "eye-off" : "eye"} size={24} />
          </TouchableOpacity>
        </View>

        {/* Login Buttons */}
        <Text style={styles.orLogin}>Or Login with</Text>
        <View styles={styles.socialButtons}>
          <TouchableOpacity>
            <Ionicons name="logo-facebook" size={40} color="#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="logo-google" size={40} color="#DB4437" />
          </TouchableOpacity>
        </View>

        {/* Register Link */}
        <Text style={styles.registerText}>
          Don’t have an account? <Text style={styles.registerLink}>Register</Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Lab43;
