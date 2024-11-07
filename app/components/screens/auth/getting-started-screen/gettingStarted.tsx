import React from "react";
import BlurBallsBackground from "@/app/components/backgrounds/blurBallsBackground";
import { Colors } from "@/constants/Colors";
import Button from "@/app/components/user-interface/button";
import useScreenSize from "@/hooks/useScreenSize";
import { Spacing } from "@/constants/Spacing";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";

const GettingStartedScreen: React.FC = () => {
  const { isSmall } = useScreenSize();
  const nav = useNavigation();

  const navToSigninScreen = async () => {
    const { CoreRouteNames } = await import("@/app/navigations-map/core");
    nav.navigate(CoreRouteNames.SignIn);
  };

  const navToRoleScreen = async () => {
    const { CoreRouteNames } = await import("@/app/navigations-map/core");
    nav.navigate(CoreRouteNames.Role);
  };

  return (
    <View style={styles.screen}>
      <BlurBallsBackground>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Text
              style={[styles.welcomeText, isSmall && styles.smallWelcomeText]}
            >
              Welcome to
            </Text>
            <Text
              style={[styles.welcomeBrand, isSmall && styles.smallWelcomeBrand]}
            >
              Snooker Slam
            </Text>
            <View style={styles.imgContainer}>
              <Image
                source={require("@/assets/images/getting-started.png")}
                style={[
                  styles.gettingStartedImg,
                  isSmall && styles.smallGettingStartedImg,
                ]}
                resizeMode="contain"
              />
            </View>
            <Text style={[styles.tagline, isSmall && styles.smallTagline]}>
              Connect, Compete, Conquer
            </Text>
          </View>
          <View style={styles.actionContainer}>
            <Button mode="contained" onPress={navToRoleScreen}>
              Get Started
            </Button>
            <View style={styles.actionBox}>
              <Text style={styles.actionText}>Already have an account?</Text>
              <Button mode="text" onPress={navToSigninScreen}>
                Sign In
              </Button>
            </View>
          </View>
        </SafeAreaView>
      </BlurBallsBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    marginHorizontal: Spacing.medium,
    paddingBottom: Platform.OS === "ios" ? 20 : 0,
  },
  container: {
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: Colors.gray.light,
    marginTop: Platform.OS === "android" ? 20 : 0,
  },
  smallWelcomeText: {
    fontSize: 16,
  },
  welcomeBrand: {
    color: Colors.white,
    textAlign: "center",
    marginTop: 6,
    fontSize: 32,
    fontWeight: "700",
  },
  smallWelcomeBrand: {
    fontSize: 24,
  },
  imgContainer: {
    marginTop: 40,
  },
  gettingStartedImg: {
    width: 325,
    height: 325,
  },
  smallGettingStartedImg: {
    width: 200,
    height: 200,
  },
  tagline: {
    color: Colors.white,
    textAlign: "center",
    marginTop: 10,
    fontSize: 32,
    fontWeight: "900",
  },
  smallTagline: {
    fontSize: 24,
  },
  actionContainer: {
    marginTop: Platform.OS === "ios" ? 80 : 10,
  },
  actionBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  actionText: {
    color: Colors.gray.light,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default GettingStartedScreen;
