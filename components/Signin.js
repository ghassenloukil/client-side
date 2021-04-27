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

const Signin = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = function () {
    var obj = { email: email, password: password };
    axios
      .post("http://10.0.2.2:3000/api/ParkiZone/login", obj)
      .then((res) => {
        if (res.data.message === "success") {
          console.log("i'm in");
          navigate("TabNavigator");
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
              width: 100,
              height: 150,
              marginTop: "-10%",
              justifyContent: "center",
              alignItems: "center",
            }}
            source={require("./parki.jpg")}
          />
        </View>
        <View style={{ height: "100%" }}>
          <TextInput
            placeholder="Email"
            style={{
              marginTop: "3%",
              height: 35,
              borderRadius: 10,
              fontSize: 20,
              backgroundColor: "white",
            }}
            onChangeText={(email) => setEmail(email)}
            defaultValue={email}
          />
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            style={{
              marginTop: "3%",
              height: 35,
              borderRadius: 10,
              fontSize: 20,
              backgroundColor: "white",
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
    backgroundColor: "black",
  },
  inputs: {
    width: "70%",
    height: "80%",
    fontSize: 20,
  },
  appButtonContainer: {
    backgroundColor: "transparent",
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
