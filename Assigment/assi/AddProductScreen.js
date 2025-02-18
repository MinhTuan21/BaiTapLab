import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./addPS";

const API_ADD_PRODUCT = "http://172.16.53.132:4000/products/add";

const AddProductScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleAddProduct = async () => {
    if (!name || !price || !image || !category) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const newProduct = { name, price, image, category };

    try {
      const response = await fetch(API_ADD_PRODUCT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        Alert.alert("Thành công", "Sản phẩm đã được thêm!");
        navigation.goBack(); // Quay lại màn hình chính
      } else {
        throw new Error("Lỗi khi thêm sản phẩm");
      }
    } catch (error) {
      Alert.alert("Lỗi", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thêm sản phẩm</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Tên sản phẩm"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Giá sản phẩm"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Link ảnh sản phẩm"
        value={image}
        onChangeText={setImage}
      />
      <TextInput
        style={styles.input}
        placeholder="Danh mục"
        value={category}
        onChangeText={setCategory}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
        <Text style={styles.addButtonText}>Thêm sản phẩm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddProductScreen;

