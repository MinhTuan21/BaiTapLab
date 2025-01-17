import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Modal, SafeAreaView, Pressable, Alert } from "react-native";

const Lab3 = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const colorText = (color) => ({ color });
  const styleText = (style) => ({ ...style });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", marginTop: 35 }}>
      {/* Input Fields */}
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nhập họ tên"
        style={styles.tipStyle}
        placeholderTextColor="gray"
        maxLength={20}
        autoCapitalize="words"
        autoCorrect={false}
      />
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Nhập số điện thoại"
        style={styles.tipStyle}
        placeholderTextColor="gray"
        keyboardType="phone-pad"
        maxLength={15}
        autoCorrect={false}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Nhập mật khẩu"
        style={styles.tipStyle}
        placeholderTextColor="gray"
        secureTextEntry={true}
      />

      {/* Text Section */}
      <View style={styles.container1}>
        <Text style={styles.baseText}>
          Em vào đời bằng{" "}
          <Text style={[styles.boldText, { color: "red" }]}>vang đỏ</Text>, anh vào đời bằng{" "}
          <Text style={[styles.boldText, { color: "yellow" }]}>nước trà</Text>
        </Text>
        <Text style={styles.baseText}>
          Bằng cơn mưa thơm{" "}
          <Text style={[styles.boldText]}>mùi đất</Text> và{" "}
          <Text style={[{ fontSize: 10 }, styles.italicText]}>hoa dại mọc trước nhà</Text>
        </Text>
        <Text
          style={[styles.baseText, styles.boldText, styles.italicText, colorText("gray")]}
        >
          Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
        </Text>
        <Text style={styles.baseText}>
          Lý trí em là{" "}
          <Text style={styleText({ textDecorationLine: "underline", letterSpacing: 20, fontWeight: "bold" })}>
            công cụ{" "}
          </Text>
          còn trái tim anh là
          <Text style={styleText({ textDecorationLine: "underline", letterSpacing: 20, fontWeight: "bold" })}>
            {" "}động cơ{" "}
          </Text>
        </Text>

        {/* Line 5 */}
        <Text style={[styles.baseText, styleText({ textAlign: "right" })]}>
          Em vào đời nhiều đồng nghiệp anh vào đời bằng thân tình
        </Text>

        {/* Line 6 */}
        <Text style={[
          styles.baseText,
          styleText({
            textAlign: "center",
            fontWeight: "bold",
            color: "orange",
          }),
        ]}>
          Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
        </Text>

        {/* Line 7 */}
        <Text style={[
          styles.baseText,
          styleText({
            textAlign: "left",
            fontWeight: "bold",
            color: "black",
          }),
        ]}>
          Em vào đời bằng <Text style={colorText("white")}>mây trắng</Text> em
          vào đời bằng <Text style={colorText("yellow")}>nắng xanh</Text>
        </Text>

        {/* Line 8 */}
        <Text style={[
          styles.baseText,
          styleText({
            textAlign: "left",
            fontWeight: "bold",
            color: "black",
          }),
        ]}>
          Em vào đời bằng <Text style={colorText("yellow")}>đại lộ</Text> và
          con đường đó giờ <Text style={colorText("white")}>vắng anh</Text>
        </Text>
      </View>

      {/* Modal */}
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Lab3;

const styles = StyleSheet.create({
  tipStyle: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  container1: {
    padding: 10,
  },
  baseText: {
    fontSize: 16,
    color: "black",
  },
  boldText: {
    fontWeight: "bold",
  },
  italicText: {
    fontStyle: "italic",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
