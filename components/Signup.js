import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
const validator = require("validator");

const Signup = ({ navigation: { navigate } }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    var userToAdd = {
      username: username,
      email: email,
      password: password,
    };
    if (!validator.isEmail(email))
      return Alert.alert("Email should be a valid email");
    axios
      .post("http://10.0.2.2:3000/api/ParkiZone/user/create", userToAdd)
      .then((response) => {
        if (response) {
          console.log("heeloo", response);
          Alert.alert(
            "You're signed up successfully. Please signin to access your account."
          );
          setTimeout(() => {
            navigate("Signin");
          }, 1500);
        }
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Failed to signup");
      });
  };
  return (
    <View style={styles.main}>
      <View style={styles.inputs}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            style={{
              width: 105,
              height: 150,
              marginTop: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            source={require("./logo.png")}
          />
        </View>
        <TextInput
          placeholder="username"
          name="username"
          style={{
            marginTop: "3%",
            borderRadius: 10,
            fontSize: 20,
            backgroundColor: "white",
            width: 300,
           height: 44,
           padding: 10,
           marginBottom: 10,
          }}
          onChangeText={(username) => setUsername(username)}
          defaultValue={username}
        />
        <TextInput
          placeholder="email"
          name="email"
          style={{
            marginTop: "3%",
            borderRadius: 10,
            fontSize: 20,
            backgroundColor: "white",
            width: 300,
           height: 44,
           padding: 10,
           marginBottom: 10,
          }}
          onChangeText={(email) => setEmail(email)}
          defaultValue={email}
        />
        <TextInput
          placeholder="password"
          name="password"
          style={{
            marginTop: "3%",
            borderRadius: 10,
            fontSize: 20,
            backgroundColor: "white",
            width: 300,
           height: 44,
           padding: 10,
           marginBottom: 10,
          }}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          defaultValue={password}
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText} onPress={handleSubmit}>
              {" "}
              Signup{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#081845",
  },
  inputs: {
    width: "70%",
    height: "80%",
    fontSize: 20,
  },
  row: {
    marginBottom: "3%",
    marginTop: "3%",
    height: 35,
    borderRadius: 10,
    fontSize: 20,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  appButtonContainer: {
    backgroundColor: "#F9C80E",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
    paddingVertical: 10,
    width: 150,
    marginRight: 10,
    marginTop: 1,
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
export default Signup;
