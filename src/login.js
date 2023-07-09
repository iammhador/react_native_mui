import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

const Login = ({ navigation }) => {
  return (
    <ScrollView>
      <PaperProvider>
        <View style={{ marginHorizontal: 30, marginVertical: 60 }}>
          <View style={{ marginBottom: 20 }}>
            <Entypo name="login" size={50} color="#1976d2" />
          </View>

          <View style={{ marginBottom: 60 }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "900",
              }}
            >
              Hi there!
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "900",
              }}
            >
              Welcome back.
            </Text>
          </View>

          <View>
            <View style={{ marginBottom: 50 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#fff",

                  borderBottomEndRadius: 2,
                  borderBottomRightRadius: 2,
                  borderColor: "#e0e0e0",
                  borderTopEndRadius: 10,
                  borderTopStartRadius: 10,
                  padding: 12,
                }}
              >
                <Ionicons
                  name="md-mail-open-outline"
                  size={30}
                  color="#757575"
                />
                <TextInput
                  type="email"
                  style={{
                    marginLeft: 8,
                    fontSize: 14,
                    color: "#757575",
                  }}
                  placeholder="Username, email or phone"
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#fff",

                  borderColor: "#e0e0e0",
                  borderBottomRightRadius: 10,
                  borderBottomStartRadius: 10,
                  padding: 12,
                }}
              >
                <Feather name="lock" size={30} color="#757575" />
                <TextInput
                  type="password"
                  style={{
                    marginLeft: 8,
                    fontSize: 14,
                    color: "#757575",
                  }}
                  placeholder="Password"
                />
              </View>
            </View>

            <TouchableOpacity
              mode="contained"
              style={{
                backgroundColor: "#212121",
                paddingVertical: 20,
                backgroundColor: "#1976d2",
                borderTopEndRadius: 15,
                borderTopStartRadius: 15,
                borderBottomEndRadius: 15,
                borderBottomStartRadius: 15,
                marginBottom: 20,
              }}
              onPress={() => console.log("Button pressed!")}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  textAlign: "center",
                  color: "#f5f5f5",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            mode="contained"
            style={{
              backgroundColor: "#212121",
              paddingVertical: 20,
              borderTopEndRadius: 15,
              borderTopStartRadius: 15,
              borderBottomEndRadius: 15,
              borderBottomStartRadius: 15,
            }}
            onPress={() => navigation.navigate("SignUp", { name: "SignUp" })}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                textAlign: "center",
                color: "#f5f5f5",
              }}
            >
              {" "}
              Create a new account
            </Text>
          </TouchableOpacity>

          <View style={{ marginTop: 80 }}>
            <Text
              style={{
                textAlign: "center",
                marginBottom: 5,
                color: "#03a9f4",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Facebook login
            </Text>
            <Text
              style={{
                textAlign: "center",
                marginTop: 5,
                color: "#03a9f4",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Google login
            </Text>
          </View>
        </View>
      </PaperProvider>
    </ScrollView>
  );
};

export default Login;
