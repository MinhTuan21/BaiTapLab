import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const destinations = [
  {
    id: "1",
    name: "Vịnh Hạ Long",
    image: require("../images/halong.jpg"),
    description: "Một trong những kỳ quan thiên nhiên của thế giới với hàng ngàn hòn đảo đá vôi tuyệt đẹp.",
    location: "Quảng Ninh, Việt Nam",
  },
  {
    id: "2",
    name: "Bà Nà Hills",
    image: require("../images/bana.webp"),
    description: "Khu du lịch nổi tiếng với Cầu Vàng, khí hậu mát mẻ và cảnh quan tuyệt đẹp.",
    location: "Đà Nẵng, Việt Nam",
  },
  {
    id: "3",
    name: "Phố cổ Hội An",
    image: require("../images/pali.jpg"),
    description: "Di sản văn hóa thế giới với những con phố cổ kính và đèn lồng lung linh về đêm.",
    location: "Quảng Nam, Việt Nam",
  },
  // {
  //   id: "4",
  //   name: "Thác Bản Giốc",
  //   image: require("../images/bangioc.jpg"),
  //   description: "Một trong những thác nước đẹp nhất Đông Nam Á với cảnh quan hùng vĩ.",
  //   location: "Cao Bằng, Việt Nam",
  // },
];

const TroChoiScreen = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={destinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10, backgroundColor: "#f5f5f5" },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: { width: "100%", height: 200, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginVertical: 5 },
  location: { fontSize: 14, color: "gray" },
  description: { fontSize: 16, marginTop: 5 },
});

export default TroChoiScreen;