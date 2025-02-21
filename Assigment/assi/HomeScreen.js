import React, { useEffect, useState } from "react";
import { 
  View, Text, FlatList, Image, TouchableOpacity, TextInput, RefreshControl, Alert 
} from "react-native";
import styles from "./homeSC";

const API_URL = "http://172.16.52.92:4000/products";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const fetchProducts = async () => {
    try {
      console.log("🟢 Gọi API lấy sản phẩm...");
      const response = await fetch(`${API_URL}/list`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Dữ liệu sản phẩm:", data);
      setProducts(data);
    } catch (error) {
      console.error("❌ Lỗi khi lấy danh sách sản phẩm:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        Alert.alert("Thành công", "Sản phẩm đã bị xóa");
        fetchProducts();
      } else {
        throw new Error("Lỗi khi xóa sản phẩm");
      }
    } catch (error) {
      Alert.alert("Lỗi", error.message);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchProducts().finally(() => setRefreshing(false));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find the best coffee for you</Text>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Search for coffee..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate("AddProductScreen")}
      >
        <Text style={styles.addButtonText}>+ Add Product</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredProducts}
        numColumns={2}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <TouchableOpacity 
              onPress={() => navigation.navigate("ProductDetail", { product: item })}
            >
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.deleteButton} 
              onPress={() => handleDelete(item._id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default HomeScreen;
