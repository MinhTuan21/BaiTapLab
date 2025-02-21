import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./lgin";

// làm call api sản pahamr chi tiet
const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.detailImage} />
      <Text style={styles.productTitle}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <Text style={styles.description}>This is a detailed description of the product.</Text>

      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailScreen;
