import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  searchInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "45%",
    marginBottom: 15,
    marginRight:"6%",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  favoriteButton: {
    backgroundColor: "#ff4d4d",
    padding: 8,
    borderRadius: 15,
  },
  cartButton: {
    backgroundColor: "#28a745",
    padding: 8,
    borderRadius: 15,
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    padding: 8,
    borderRadius: 15,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#ddd",
  },
  activeCategory: {
    backgroundColor: "#007bff",
  },
  categoryText: {
    color: "#000",
    fontWeight: "bold",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    elevation: 5, 
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
