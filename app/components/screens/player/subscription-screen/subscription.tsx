import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { Spacing } from "@/constants/Spacing";
import CrossIcon from "@/assets/images/cross.svg";
import useScreenSize from "@/hooks/useScreenSize";
import GradientTopBackground from "../../../backgrounds/gradientTopBackground";

const Subscription = () => {
  const { isSmall } = useScreenSize();

  const [subscription, setSubscription] = useState<boolean | null>(true);

  const handleSubscription = () => {
    if (subscription) {
      Alert.alert(
        "Are you sure you want to cancel your subscription?",
        "You can again subscribe at any time.",
        [
          {
            text: "No",
            style: "cancel",
          },
          {
            text: "Yes",
            // onPress: () => nav.navigate(PlayerRouteNames.CancelSubscription),
          },
        ]
      );
    } else {
      //avoid circular navigation
      // nav.navigate(PlayerRouteNames.ActivateSubscription);
    }
  };

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]}>
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
          >
            <Text style={styles.title}>Subscription</Text>
            <View style={styles.infoContainer}>
              <TouchableOpacity
                onPress={() => handleSubscription()}
                style={styles.button}
              >
                <CrossIcon width={20} height={20} />
                <Text style={styles.buttonText}>
                  {subscription
                    ? "Cancel Subscription"
                    : "Activate Subscription"}
                </Text>
              </TouchableOpacity>
              <View style={styles.box}>
                <Text style={styles.infoTitle}>
                  {subscription
                    ? "Why cancel subscription?"
                    : "Subscription Benefits"}
                </Text>
                <Text style={styles.infoDescription}>
                  {subscription
                    ? "If you're facing financial difficulties, not using the app regularly, or finding a better alternative, you can cancel your subscription. Also, if you're experiencing technical issues, canceling might be a reasonable option."
                    : "Enjoy unlimited access to all app features without restrictions. Get exclusive content and features that are only available to subscribers. Receive priority customer support and faster response times. Experience an ad-free environment and benefit from regular updates and improvements to the app."}
                </Text>
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
    padding: 20,
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
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Subscription;
