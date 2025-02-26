import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import styles from "../Screens/stylesPayment";
import { Ionicons } from "@expo/vector-icons";

const PaymentScreen = ({ route, navigation }) => {
  const { selectedItems, totalPrice } = route.params;
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [paymentCode, setPaymentCode] = useState("");

  const handlePayment = () => {
    if ((paymentMethod === "Momo" || paymentMethod === "Ngân hàng") && paymentCode.trim() === "") {
      Alert.alert("Lỗi", "Vui lòng nhập mã thanh toán.");
      return;
    }

    Alert.alert("Thanh Toán Thành Công", `Bạn đã chọn thanh toán bằng ${paymentMethod}\nMã: ${paymentCode}`);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phương Thức Thanh Toán</Text>
      <Text style={styles.total}>Tổng tiền: {totalPrice.toLocaleString()} VNĐ</Text>

      <TouchableOpacity style={styles.paymentButton} onPress={() => setPaymentMethod("Tiền mặt")}>
        <Ionicons name="cash-outline" size={24} color="green" />
        <Text style={styles.paymentText}>Thanh toán tiền mặt</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentButton} onPress={() => setPaymentMethod("Momo")}>
        <Ionicons name="phone-portrait-outline" size={24} color="purple" />
        <Text style={styles.paymentText}>Thanh toán qua Momo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paymentButton} onPress={() => setPaymentMethod("Ngân hàng")}>
        <Ionicons name="card-outline" size={24} color="blue" />
        <Text style={styles.paymentText}>Thanh toán qua ngân hàng</Text>
      </TouchableOpacity>

      {(paymentMethod === "Momo" || paymentMethod === "Ngân hàng") && (
        <TextInput
          style={styles.input}
          placeholder="Nhập mã thanh toán"
          value={paymentCode}
          onChangeText={setPaymentCode}
        />
      )}

      {paymentMethod && (
        <TouchableOpacity style={styles.confirmButton} onPress={handlePayment}>
          <Text style={styles.confirmText}>Xác nhận thanh toán</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PaymentScreen;
