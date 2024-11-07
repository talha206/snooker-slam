import React from "react";
import useScreenSize from "@/hooks/useScreenSize";
import { SafeAreaView } from "react-native";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";
import { useAppDispatch } from "@/hooks/useReduxHooks";
import { AntDesign, Feather } from "@expo/vector-icons";
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

const Account = () => {
  const dispatch = useAppDispatch();
  const role = "club owner";
  const { isSmall } = useScreenSize();
  const nav = useNavigation();

  const generalSettings = [
    {
      title: "Account Info",
      route: `AccountInfo`,
    },
    {
      title: "Payments",
      route: `Payments`,
    },
    {
      title: "Settings",
      route: `Settings`,
    },
    ...(role === "club owner"
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
      route: `Support`,
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
  
  const navToDeleteAccount = async () => {
    const { ClubOwnerRouteNames } = await import(
      "@/app/navigations-map/club-owner"
    );
    nav.navigate(ClubOwnerRouteNames.DeleteAccount);
  };
  const handleLogout = async () => {
    const { CoreRouteNames } = await import('@/app/navigations-map/core/auth/index');
    nav.navigate(CoreRouteNames.GettingStarted)
  }

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
          onPress: () => navToDeleteAccount(),
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
          onPress: () => handleLogout(),
        },
      ]
    );
  };

  const handlerLogout = async () => {
    dispatch(logout());
    const { CoreRouteNames } = await import('@/app/navigations-map/core/auth/index');
    nav.navigate(CoreRouteNames.SignIn) 
  };

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
                <Text style={styles.appVersionNumber}>1.0.0</Text>
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

export default Account;

function handleLogout(): void {
  throw new Error("Function not implemented.");
}
