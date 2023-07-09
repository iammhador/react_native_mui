import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const SignUp = ({ navigation }) => {
  return (
    <ScrollView>
      <PaperProvider>
        <View
          style={{
            height: "100%",
            backgroundColor: "#000000",
          }}
        >
          <Image
            source={require("../assets/boy.png")}
            style={{
              width: 70,
              height: 70,
              alignSelf: "center",
              marginTop: 40,
            }}
          />

          <View style={{ marginHorizontal: 30, marginVertical: 30 }}>
            <View>
              <View
                style={{
                  marginBottom: 50,
                  backgroundColor: "#fff",
                  paddingHorizontal: 20,
                  paddingVertical: 30,
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    marginBottom: 20,
                    borderBottomWidth: 1,
                    borderColor: "#e0e0e0",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      color: "#757575",
                      marginBottom: 5,
                    }}
                  >
                    FULL NAME
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      padding: 12,
                    }}
                  >
                    <TextInput
                      type="text"
                      style={{
                        fontSize: 14,
                      }}
                      placeholder="Johnson Jonny"
                    />
                  </View>
                </View>

                <View
                  style={{
                    marginBottom: 20,
                    borderBottomWidth: 1,
                    borderColor: "#e0e0e0",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      color: "#757575",
                      marginBottom: 5,
                    }}
                  >
                    Email
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      padding: 12,
                    }}
                  >
                    <TextInput
                      type="email"
                      style={{
                        fontSize: 14,
                      }}
                      placeholder="johnny@example.com"
                    />
                  </View>
                </View>

                <View
                  style={{
                    marginBottom: 20,
                    borderBottomWidth: 1,
                    borderColor: "#e0e0e0",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      color: "#757575",
                      marginBottom: 5,
                    }}
                  >
                    PASSWORD
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "#fff",
                      padding: 12,
                    }}
                  >
                    <TextInput
                      type="password"
                      style={{
                        marginLeft: 8,
                        fontSize: 14,
                      }}
                      placeholder="***********"
                    />
                    <Feather name="eye" size={30} color="#757575" />
                  </View>
                </View>
                <View
                  style={{
                    marginBottom: 20,
                    borderBottomWidth: 1,
                    borderColor: "#e0e0e0",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "700",
                      color: "#757575",
                      marginBottom: 5,
                    }}
                  >
                    CONFIRM PASSWORD
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "#fff",
                      padding: 12,
                    }}
                  >
                    <TextInput
                      type="password"
                      style={{
                        marginLeft: 8,
                        fontSize: 14,
                      }}
                      placeholder="***********"
                    />
                    <Feather name="eye" size={30} color="#757575" />
                  </View>
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
                  Sign up with email
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: "#f5f5f5",
                  marginRight: 10,
                }}
              >
                or with social :
              </Text>
              <FontAwesomeIcon
                name="facebook"
                color="#fff"
                style={{
                  fontSize: 27,
                  padding: 18,
                  backgroundColor: "#3b5998",
                  borderRadius: 50,
                  marginRight: 10,
                }}
              />
              <FontAwesomeIcon
                name="google"
                color="#fff"
                style={{
                  fontSize: 27,
                  padding: 18,
                  backgroundColor: "#EA4335",
                  borderRadius: 50,
                  marginRight: 10,
                }}
              />
            </View>
          </View>
        </View>
      </PaperProvider>
    </ScrollView>
  );
};

export default SignUp;
