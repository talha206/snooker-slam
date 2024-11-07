import React, { useEffect, useState } from "react";
import useScreenSize from "@/hooks/useScreenSize";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native";
import { Spacing } from "@/constants/Spacing";
import { AntDesign, Feather } from "@expo/vector-icons";
import { checkVersion } from "react-native-check-version";
import { useAppDispatch } from "@/hooks/useReduxHooks";
import { useNavigation } from "@react-navigation/native";
import SettingsBox from "../../../user-interface/common/settings-box";
import { logout } from "@/app/components/app-container/appContainerSlice";
import GradientTopBackground from "../../../backgrounds/gradientTopBackground";

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

const PlayerAccount = () => {
  const role = "Player";
  const { isSmall } = useScreenSize();
  const dispatch = useAppDispatch();
  const nav = useNavigation();
  const [appVersion, setAppVersion] = useState<any>(null);

  const generalSettings = [
    {
      title: "Account Info",
      route: `${role}AccountInfo`,
    },
    {
      title: "Payments",
      route: `${role}Payments`,
    },
    {
      title: "Settings",
      route: `${role}Setting`,
    },
    ...(role === "Player"
      ? [
          {
            title: "Subscription",
            route: "Subscription",
          },
        ]
      : []),
  ];

  const applicationSettings = [
    {
      title: "Support",
      route: `${role}Support`,
    },
    {
      title: "Terms & Conditions",
      route: ``,
    },
    {
      title: "Privacy Policy",
      route: "",
    },
  ];

  const showDeleteAccountAlert = () => {
    Alert.alert(
      "Are you sure you want to delete your account?",
      "All account info will be lost.",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
        },
      ]
    );
  };

  const showLogoutAlert = () => {
    Alert.alert(
      "Are you sure you want to logout?",
      "Any unsaved changes will be lost.",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
        },
      ]
    );
  };

  useEffect(() => {
    const versionGet = async () => {
      const version = await checkVersion();
      setAppVersion(version?.version);
    };

    versionGet();
  }, []);

  const handlerLogout = async () => {
    dispatch(logout());
    const { CoreRouteNames } = await import('@/app/navigations-map/core/auth/index');
    nav.navigate(CoreRouteNames.SignIn)
  }

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]}>
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
          >
            <Text style={styles.title}>Account</Text>
            <View style={styles.settingContainer}>
              <Text style={styles.settingTitle}>General</Text>
              <SettingsBox settingList={generalSettings} />
            </View>
            <View style={styles.settingContainer}>
              <Text style={styles.settingTitle}>Application</Text>
              <SettingsBox settingList={applicationSettings} />
            </View>
            <View style={styles.settingContainer}>
              <Text style={styles.settingTitle}>Actions</Text>
              <TouchableOpacity
                onPress={() => showDeleteAccountAlert()}
                style={styles.actionButton}
              >
                <AntDesign name="deleteuser" size={20} color={Colors.primary} />
                <Text style={styles.actionButtonText}>Delete Account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => showLogoutAlert()}
                style={styles.actionButton}
              >
                <AntDesign name="logout" size={20} color={Colors.primary} />
                <Text onPress={handlerLogout} style={styles.actionButtonText}>Logout</Text>
              </TouchableOpacity>
              <View style={styles.appVersion}>
                <View style={styles.appVersionInner}>
                  <Feather name="info" size={20} color={Colors.white} />
                  <Text style={styles.appVersionText}>App Version</Text>
                </View>
                <Text style={styles.appVersionNumber}>{appVersion}</Text>
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
  smallContainer: {
    paddingHorizontal: 16,
  },
  title: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: "700",
  },
  settingContainer: {
    marginTop: 20,
  },
  settingTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
  },
  actionButton: {
    backgroundColor: Colors.gray[400],
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderColor: Colors.gray[200],
    marginBottom: 10,
  },
  actionButtonText: {
    color: Colors.white,
    fontSize: 16,
  },
  appVersion: {
    backgroundColor: Colors.gray[400],
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: Colors.gray[200],
    marginBottom: 100,
  },
  appVersionInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  appVersionText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  appVersionNumber: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default PlayerAccount;
