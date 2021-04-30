import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import 'localstorage-polyfill';

const Signin = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//signin-----
  const handleClick = function () {
    var obj = { email: email, password: password };
    axios
      .post("http://10.0.2.2:3000/api/ParkiZone/login", obj)
      .then((res) => {
        if (res.data.message === "success") {
          console.log("i'm in", email);
          navigate("TabNavigator");
          localStorage.setItem("email", email);
          

          
        } else {
          console.log("you can not access");
        }
      })
      .catch((err) => {
        console.log(err);
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
              marginTop: "-10%",
              justifyContent: "center",
              alignItems: "center",
            }}
            source={require("./logo.png")}
          />
        </View>
        <View style={{ height: "100%" }}>
          <TextInput
            placeholder="Email"
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
            secureTextEntry={true}
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
            onChangeText={(password) => setPassword(password)}
            defaultValue={password}
          />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1%",
            }}
          >
            <TouchableOpacity style={styles.appButtonContainer}>
              <Text style={styles.appButtonText} onPress={handleClick}>
                {" "}
                Signin{" "}
              </Text>
            </TouchableOpacity>
          </View>
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

export default Signin;
