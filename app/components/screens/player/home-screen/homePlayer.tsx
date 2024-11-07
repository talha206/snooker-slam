import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Home = () => {

  return (
    <View style={styles.container}>
      <Text>Just a dummy screen for player</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  buttonStyle: {
    width: "100%",
    height: 48,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default Home;
