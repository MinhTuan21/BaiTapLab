import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: { 
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 3,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  eyeIcon: {
    padding: 10,
  },
  orLogin: {
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  socialButtons: {
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  registerText: {
    textAlign: "center",
    marginTop: 20,
  },
  registerLink: {
    color: "blue",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  loading: {
    marginTop: 20,
  },
    loadingText: {
      textAlign: "center",
    },
    logins:{
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      borderRadius:20,
      backgroundColor: "#f44336",
      padding: 15,
      color: "white",
      fontWeight: "bold",
      fontSize: 18,
    },
    forgotPasswordText:{
      color: "blue",
      marginTop: 10,
      marginBottom: 10,
      fontSize: 16,
    }
});

export default styles;