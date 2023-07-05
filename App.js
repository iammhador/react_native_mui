import React from "react";
import { View, Text } from "react-native";
import { Button, Provider as PaperProvider } from "react-native-paper";

const App = () => {
  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ marginBottom: 16 }}>
          Material UI is a popular design system and component library that
          provides a set of reusable UI components and styling options. It
          offers a consistent and visually appealing user interface for your
          React Native applications.
        </Text>
        <Text style={{ marginBottom: 16 }}>
          Material UI follows the principles of Material Design, a design
          language developed by Google. It focuses on using a grid-based layout,
          responsive animations, and meaningful transitions to create a seamless
          user experience across different platforms and devices.
        </Text>
        <Button mode="contained" onPress={() => console.log("Button pressed!")}>
          Click me!
        </Button>
      </View>
    </PaperProvider>
  );
};

export default App;
