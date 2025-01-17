import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container1: {
    backgroundColor: "blue",
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  baseText: {
    padding: 10,
    fontFamily: "Cochin",
    color: "white",
    fontSize: 16,
    marginTop: 5,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  tipStyle: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    marginVertical: 15,
    padding: 10,
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
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
