import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform
  // Image
} from "react-native";
import regis from "./regis"; 

const RegisterScreen = ({ navigation }) => { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={regis.container}>
      <ScrollView contentContainerStyle={regis.scrollContainer}> 
      {/* <View style={regis.circleWrapper}> 
          <Image 
            source={require('../images/vl.png')} 
            style={regis.circleImage}
          />
        </View>  */}
        <Text style={regis.title}>Create an Account</Text> 
        <TextInput
          placeholder="Enter your email"
          style={regis.input} 
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Enter your password"
          style={regis.input} 
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
         <TextInput
          placeholder="Re-Enter your password"
          style={regis.input} 
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        <TouchableOpacity style={regis.LoginButton}> 
          <Text style={regis.forgotPasswordText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={regis.registerText}>
            Already have an account? <Text style={regis.registerLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
