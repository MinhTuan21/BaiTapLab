import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  Animated,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const initialImages = [
  { id: "1", uri: require("../images/halong.jpg"), title: "Hạ Long", description: "Vịnh Hạ Long nổi tiếng với cảnh đẹp thiên nhiên kỳ vĩ." },
  { id: "2", uri: require("../images/pali.jpg"), title: "Bali", description: "Hòn đảo Bali với bãi biển tuyệt đẹp và văn hóa độc đáo." },
  { id: "3", uri: require("../images/bana.webp"), title: "Bà Nà Hills", description: "Khu du lịch Bà Nà Hills với cảnh quan đẹp như châu Âu." },
  { id: "4", uri: require("../images/halong.jpg"), title: "Hạ Long", description: "Một góc khác của Vịnh Hạ Long vào lúc hoàng hôn." },
];

const ChoBanScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState({});
  
  const animatedValues = useRef(
    initialImages.reduce((acc, image) => {
      acc[image.id] = new Animated.Value(1);
      return acc;
    }, {})
  ).current;

  const handleLike = (id) => {
    setLikedImages((prev) => ({ ...prev, [id]: !prev[id] }));

    Animated.sequence([
      Animated.timing(animatedValues[id], { toValue: 1.5, duration: 200, useNativeDriver: true }),
      Animated.timing(animatedValues[id], { toValue: 1, duration: 200, useNativeDriver: true }),
    ]).start();
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={initialImages}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => setSelectedImage(item)}>
              <Image source={item.uri} style={styles.image} />
            </TouchableOpacity>

            {/* Nút Like */}
            <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.heartContainer}>
              <Animated.View style={{ transform: [{ scale: animatedValues[item.id] }] }}>
                <Ionicons
                  name={likedImages[item.id] ? "heart" : "heart-outline"}
                  size={24}
                  color={likedImages[item.id] ? "red" : "gray"}
                />
              </Animated.View>
            </TouchableOpacity>
          </View>
        )}
      />

   
      <Modal visible={!!selectedImage} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedImage && (
              <>
                <Image source={selectedImage.uri} style={styles.modalImage} />
                <Text style={styles.title}>{selectedImage.title}</Text>
                <Text style={styles.description}>{selectedImage.description}</Text>

                <TouchableOpacity
                  onPress={() => {
                    Alert.alert("Thành công", "Bạn đã đặt vé thành công!");
                    setSelectedImage(null); // Đóng modal
                  }}
                  style={styles.bookButton}
                >
                  <Text style={styles.bookText}>Đặt Vé</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedImage(null)} style={styles.closeButton}>
                  <Text style={styles.closeText}>Đóng</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center", padding: 10 },
  imageContainer: { position: "relative", margin: 10 },
  image: { width: 150, height: 150, borderRadius: 10 },
  heartContainer: { position: "absolute", top: 10, right: 10 },
  modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
  modalContent: { width: 300, padding: 20, backgroundColor: "white", borderRadius: 10, alignItems: "center" },
  modalImage: { width: 200, height: 200, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  description: { fontSize: 16, textAlign: "center", marginBottom: 10 },
  bookButton: { backgroundColor: "#28A745", padding: 10, borderRadius: 5, marginBottom: 10 },
  bookText: { color: "white", fontSize: 16, fontWeight: "bold" },
  closeButton: { backgroundColor: "#463267", padding: 10, borderRadius: 5 },
  closeText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default ChoBanScreen;
