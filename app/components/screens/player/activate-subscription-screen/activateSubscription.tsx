import { Colors } from "@/constants/Colors";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import { Spacing } from "@/constants/Spacing";
import { useNavigation } from "@react-navigation/native";
import CodeInput from "../../../user-interface/codeInput";
import Button from "../../../user-interface/button";
import useScreenSize from "@/hooks/useScreenSize";
import GradientTopBackground from "../../../backgrounds/gradientTopBackground";

const ActivateSubscription = () => {
  const { isSmall } = useScreenSize();

  const nav = useNavigation();

  const navToPlayerPayments = async () => {
    const { PlayerRouteNames } = await import("@/app/navigations-map/player");
    nav.navigate(PlayerRouteNames.PlayerPayments);
  };

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]}>
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
          >
            <Text style={styles.title}>Activate Subscription</Text>
            <View style={styles.infoContainer}>
              <View>
                <Text style={styles.infoText}>Please enter your PIN Code</Text>
                <View style={styles.codeInputContainer}>
                  <CodeInput length={4} onChange={() => {}} />
                </View>
              </View>
              <View style={styles.box}>
                <Text style={styles.infoText}>
                  You can cancel subscription at any time.
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={() => navToPlayerPayments()}>
                  Activate Subscription
                </Button>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </GradientTopBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  smallScreen: {
    marginHorizontal: 10,
  },
  safeArea: {
    flex: 1,
    marginHorizontal: Spacing.medium,
    marginTop: Spacing.large,
  },
  container: {
    marginTop: 10,
    width: "100%",
  },
  title: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: "700",
  },
  infoText: {
    color: Colors.gray.light,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "600",
  },
  infoContainer: {
    marginTop: 50,
  },
  box: {
    marginTop: 20,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: Spacing.medium,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "600",
  },
  infoDescription: {
    color: Colors.gray.light,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "justify",
  },
  codeInputContainer: {
    marginTop: 16,
  },
  buttonContainer: {
    marginTop: 40,
  },
});

export default ActivateSubscription;
