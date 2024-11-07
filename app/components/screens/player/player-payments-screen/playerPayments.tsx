import React from "react";
import useScreenSize from "@/hooks/useScreenSize";
import GradientTopBackground from "../../../backgrounds/gradientTopBackground";
import SingleInfoBox from "../../../user-interface/common/single-info-box";
import InfoBox from "../../../user-interface/common/info-box";
import DateTimePicker from "../../../user-interface/common/date-time-picker";
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import { Colors } from "@/constants/Colors";
import Button from "../../../user-interface/button";
import { Spacing } from "@/constants/Spacing";
import { useNavigation } from "@react-navigation/native";

const PlayerPayments = () => {
  const { isSmall } = useScreenSize();
  const nav = useNavigation();

  const navToMakePayment = async () => {
    const { PlayerRouteNames } = await import("@/app/navigations-map/player");
    nav.navigate(PlayerRouteNames.Payment);
  };

  const paymentData = [
    {
      title: "Next Transaction Date",
      value: "1st September",
    },
  ];

  return (
    <View style={[styles.screen, isSmall && styles.smallScreen]}>
      <GradientTopBackground>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
          >
            <Text style={styles.title}>Payments</Text>
            <View style={styles.infoContainer}>
              <DateTimePicker placeholder="Month & Year" />
              <View style={styles.paymentsWrapper}>
                <SingleInfoBox title="Total Amount" value="2000" />
                <View style={styles.box}>
                  <InfoBox infoList={paymentData} />
                </View>
                <View style={styles.box}>
                  <Text style={styles.boxTitle}>Payment Ledger</Text>
                  {/* <PaymentsLedgerTable /> */}
                </View>
                <View style={styles.buttonContainer}>
                  <Button mode="contained" onPress={navToMakePayment}>
                    Pay Now
                  </Button>
                </View>
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
  infoContainer: {
    marginTop: 20,
  },
  pickerWrapper: {
    position: "relative",
  },
  picker: {
    position: "absolute",
    width: "100%",
    height: 56,
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderRadius: 14,
  },
  pickerDateShow: {
    position: "relative",
  },
  pickerIcon: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -12 }],
    color: Colors.white,
  },
  paymentsWrapper: {
    marginTop: 20,
  },
  box: {
    marginTop: 20,
  },
  boxTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 40,
  },
});

export default PlayerPayments;
