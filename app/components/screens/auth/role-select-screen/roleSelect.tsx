import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import BlurBallsBackground from "@/app/components/backgrounds/blurBallsBackground";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Stepper from "@/app/components/user-interface/stepper";
import { Spacing } from "@/constants/Spacing";
import { UserState } from "@/app/types/auth";
import useScreenSize from "@/hooks/useScreenSize";
import CancelAlert from "@/app/components/user-interface/cancelAlert";

const RoleSelectScreen = () => {
  const nav = useNavigation();
  const { isSmall } = useScreenSize();

  const navToPlayerScreen = () => {
    const {
      CoreRouteNamesPlayer,
    } = require("@/app/navigations-map/core/auth/player");
    nav.navigate(CoreRouteNamesPlayer.PlayerContact);
  };

  const navToClubName = async () => {
    const { CoreRouteNamesClubOwner } = await import(
      "@/app/navigations-map/core/auth/clubOwner"
    );
    nav.navigate(CoreRouteNamesClubOwner.ClubName);
  };

  const roles = [
    {
      title: "Player",
      img: require("@/assets/images/player-role.png"),
      role: UserState.Player,
      action: navToPlayerScreen,
    },
    {
      title: "Club Owner",
      img: require("@/assets/images/club-owner-role.png"),
      role: UserState.ClubOwner,
      action: navToClubName,
    },
  ];

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]}>
      <BlurBallsBackground>
        <SafeAreaView style={styles.safeArea}>
          <View style={[styles.container, isSmall && styles.smallContainer]}>
            <View style={styles.cancelButton}>
              <CancelAlert />
            </View>
            <View style={[styles.header, isSmall && styles.smallHeader]}>
              <Text style={[styles.title, isSmall && styles.smallTitle]}>
                What is your role?
              </Text>
              <Text style={[styles.infoText, isSmall && styles.smallInfoText]}>
                Select your role below.
              </Text>
            </View>
            <View
              style={[
                styles.rolesContainer,
                isSmall && styles.smallRolesContainer,
              ]}
            >
              {roles.map((role, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={role.action}
                  style={styles.roleButton}
                >
                  <LinearGradient
                    style={styles.outerGradient}
                    start={[0, 0]}
                    end={[1, 0]}
                    colors={[Colors.primaryMedium, Colors.primary]}
                  >
                    <LinearGradient
                      style={styles.innerGradient}
                      start={[0, 0]}
                      end={[1, 0]}
                      colors={[Colors.primaryMedium, Colors.primaryDark]}
                    >
                      <View style={styles.roleButtonInner}>
                        <View style={styles.roleButtonLeft}>
                          <Text style={styles.roleText}>I'm a</Text>
                          <Text
                            style={[
                              styles.roleTitle,
                              isSmall && styles.smallRoleTitle,
                            ]}
                          >
                            {role.title}
                          </Text>
                        </View>
                      </View>
                    </LinearGradient>
                  </LinearGradient>
                  <View>
                    <Image
                      source={role.img}
                      style={[styles.roleImg, isSmall && styles.smallRoleImg]}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View
            style={[
              styles.actionContainer,
              isSmall && styles.smallActionContainer,
            ]}
          >
            <View>
              <View style={styles.stepperContainer}>
                <Stepper noOfSteps={4} activeStep={0} />
              </View>
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
  smallScreen: {
    marginHorizontal: 10,
  },
  safeArea: {
    flex: 1,
    marginHorizontal: Spacing.medium,
  },
  container: {
    marginTop: 10,
    width: "100%",
  },
  smallContainer: {
    paddingHorizontal: 16,
  },
  cancelButton: {
    alignSelf: "flex-end",
    marginTop: Platform.OS === "android" ? 32 : 0,
  },
  header: {
    marginTop: 16,
  },
  smallHeader: {
    marginTop: 8,
  },
  title: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: "700",
  },
  smallTitle: {
    fontSize: 24,
  },
  infoText: {
    color: Colors.gray.light,
    marginTop: 10,
    fontSize: 18,
    fontWeight: "600",
  },
  smallInfoText: {
    fontSize: 14,
  },
  rolesContainer: {
    marginTop: 60,
    gap: 40,
  },
  smallRolesContainer: {
    marginTop: 30,
    gap: 20,
  },
  roleButton: {
    backgroundColor: Colors.gray.light,
    borderRadius: 30,
    marginBottom: 10,
    justifyContent: "center",
  },
  roleButtonInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 30,
    width: "100%",
    position: "relative",
  },
  roleImg: {
    width: 125,
    height: 125,
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
    right: 10,
    zIndex: 10,
  },
  smallRoleImg: {
    width: 100,
    height: 100,
  },
  roleButtonLeft: {
    paddingVertical: 24,
    paddingHorizontal: 36,
  },
  roleText: {
    color: Colors.gray.light,
    fontSize: 16,
    fontWeight: "600",
  },
  roleTitle: {
    color: Colors.white,
    fontSize: 24,
    marginTop: 6,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  smallRoleTitle: {
    fontSize: 18,
  },
  outerGradient: {
    overflow: "hidden",
    borderRadius: 30,
    padding: 4,
  },
  innerGradient: {
    borderRadius: 26,
  },
  actionContainer: {
    width: "100%",
    marginTop: Platform.select({
      ios: 160,
      android: 40,
    }),
    paddingBottom: Platform.OS === "ios" ? 30 : 0,
  },
  smallActionContainer: {
    bottom: 40,
  },
  stepperContainer: {
    marginTop: 56,
  },
});

export default RoleSelectScreen;
