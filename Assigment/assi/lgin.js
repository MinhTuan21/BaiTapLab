import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
  
    padding: 12,
    borderRadius: 8,
    color: "#fff",
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    color: "#fff",
  },
  eyeIcon: {
    padding: 10,
  },
  LoginButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "#f44336",
    padding: 15,
  },
  logins: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#ffa500",
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  registerText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
  },
  registerLink: {
    color: "#ffa500",
    fontWeight: "bold",
  },
});

export default styles;