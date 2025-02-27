import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, RefreshControl, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./stylesHomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.1.14:4000/products";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/list`);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách sản phẩm:", error);
    }
  };

  const loadFavourites = async () => {
    try {
      const storedFavourites = await AsyncStorage.getItem("favourites");
      if (storedFavourites) {
        setFavourites(JSON.parse(storedFavourites));
      }
    } catch (error) {
      console.error("Lỗi khi tải danh sách yêu thích:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    loadFavourites();
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleFavourite = async (item) => {
    const newFavourites = favourites.some((fav) => fav._id === item._id)
      ? favourites.filter((fav) => fav._id !== item._id)
      : [...favourites, item];

    setFavourites(newFavourites);
    
    try {
      await AsyncStorage.setItem("favourites", JSON.stringify(newFavourites));
    } catch (error) {
      console.error("Lỗi khi lưu danh sách yêu thích:", error);
    }
  };

  const handleAddToCart = async (item) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((cartItem) => cartItem._id === item._id);

    if (index !== -1) {
      updatedCart[index].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCart(updatedCart);
    Alert.alert("Thành công", "Sản phẩm đã được thêm vào giỏ hàng");

    // Lưu giỏ hàng vào AsyncStorage
    try {
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Lỗi khi lưu giỏ hàng:", error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`${API_URL}/delete/${productId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Lỗi khi xóa sản phẩm");
      setProducts(products.filter((product) => product._id !== productId));
      Alert.alert("Thành công", "Sản phẩm đã được xóa");
    } catch (error) {
      console.error("❌ Lỗi khi xóa sản phẩm:", error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchProducts().finally(() => setRefreshing(false));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find the best Product for you</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for ..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <View style={styles.navButtons}>
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate("Favourite", { favourites })}
        >
          <Ionicons name="heart" size={24} color="red" />
          <Text style={styles.navText}></Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate("Cart", { cart })} 
        >
          <Ionicons name="cart" size={24} color="green" />
          <Text style={styles.navText}></Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))}
        numColumns={2}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", { product: item })}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </TouchableOpacity>

            <View style={styles.actionButtons}>
              <TouchableOpacity onPress={() => handleFavourite(item)}>
                <Ionicons
                  name={favourites.some((fav) => fav._id === item._id) ? "heart" : "heart-outline"}
                  size={24}
                  color="red"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleAddToCart(item)}>
                <Ionicons name="cart-outline" size={24} color="green" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleDeleteProduct(item._id)}>
                <Ionicons name="trash" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item._id}
      />

      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate("AddProductScreen")}
      >
        <Ionicons name="add-circle" size={50} color="blue" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
