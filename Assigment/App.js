import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './assi/Login';
import RegisterScreen from './assi/Register';
import HomeScreen from './assi/HomeScreen';
import ProductDetailScreen from "./assi/ProductDetailScreen";
import AddProductScreen from "./assi/AddProductScreen";
import HomeTabs from './assi/HomeTab';
import PaymentScreen from "./assi/Screens/Payment"
import ForgotPasswordScreen from './assi/ForgotPassWord';
import EditProfileScreen from './assi/Screens/EditFrofile';

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      if (userToken) setIsLoggedIn(true);
    };
    checkLogin();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Tab": "Login"}>
        <Stack.Screen name="Tab" component={HomeTabs} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassWord" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddProductScreen" component={AddProductScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerShown:false}}/>
        <Stack.Screen name="EditFrofile" component={EditProfileScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
