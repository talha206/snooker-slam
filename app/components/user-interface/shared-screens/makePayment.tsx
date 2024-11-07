import React, { useState } from "react";
import {View,StyleSheet,Text,SafeAreaView,Keyboard,TouchableWithoutFeedback,Platform,TouchableOpacity,Image,} from "react-native";
import BlurBallsBackground from "@/app/components/backgrounds/blurBallsBackground";
import { Colors } from "@/constants/Colors";
import Button from "@/app/components/user-interface/button";
import CancelAlert from "@/app/components/user-interface/cancelAlert";
import useScreenSize from "@/hooks/useScreenSize";
import { Spacing } from "@/constants/Spacing";
import { Feather } from "@expo/vector-icons";

interface MakePaymentProps {
  handlerPayment: any;
}

const MakePayment: React.FC<MakePaymentProps> = ({ handlerPayment }) => {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(
    "Easypaisa"
  );
  const { isSmall } = useScreenSize();

  const handlerPaymentInternal = () => {
    handlerPayment(paymentMethod);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.screen, isSmall && styles.smallScreen]}>
        <BlurBallsBackground>
          <SafeAreaView style={styles.safeArea}>
            <View style={[styles.container, isSmall && styles.smallContainer]}>
              <View style={styles.cancelButton}>
                <CancelAlert />
              </View>
              <View style={[styles.header, isSmall && styles.smallHeader]}>
                <Text style={[styles.title, isSmall && styles.smallTitle]}>
                  Payment
                </Text>
                <Text
                  style={[styles.infoText, isSmall && styles.smallInfoText]}
                >
                  Select payment method below.
                </Text>
              </View>
              <View style={styles.infoBox}>
                <View style={styles.infoBoxInner}>
                  <Feather name="info" size={20} color={Colors.white} />
                  <Text style={styles.infoBoxText}>Registration Fee</Text>
                </View>
                <Text style={styles.infoValue}>Rs.1000</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => setPaymentMethod("Easypaisa")}
                  style={[
                    styles.paymentMethod,
                    paymentMethod === "Easypaisa"
                      ? styles.selectedPaymentMethod
                      : {},
                  ]}
                >
                  <Image
                    source={require("@/assets/images/easy-paisa.png")}
                    style={styles.paymentMethodLogo}
                  />
                  <Text style={styles.paymentMethodText}>Easypaisa</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={[styles.infoText, isSmall && styles.smallInfoText]}>
                Pay securely using your Easypaisa mobile wallet. No bank account
                needed.
              </Text>
              <Text style={[styles.infoText, isSmall && styles.smallInfoText]}>
                You will be directed to the easypaisa app after clicking pay
                now.
              </Text>
            </View>
            <View
              style={[
                styles.actionContainer,
                isSmall && styles.smallActionContainer,
              ]}
            >
              <View style={styles.buttonsContainer}>
                <Button
                  style={styles.button}
                  mode="contained"
                  onPress={handlerPaymentInternal}
                >
                  Pay Now
                </Button>
              </View>
            </View>
          </SafeAreaView>
        </BlurBallsBackground>
      </View>
    </TouchableWithoutFeedback>
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
    lineHeight: 40,
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
  actionContainer: {
    marginTop: 100,
    width: "100%",
  },
  smallActionContainer: {
    bottom: 40,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  button: {
    flex: 1,
  },
  infoBox: {
    backgroundColor: Colors.gray[400],
    marginTop: Spacing.large,
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: Colors.gray[200],
  },
  infoBoxInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoBoxText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  infoValue: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  paymentMethod: {
    marginTop: Spacing.large,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.gray[200],
    backgroundColor: Colors.gray[400],
    borderRadius: 24,
    paddingHorizontal: 38,
    paddingVertical: 28,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.large,
    marginBottom: Spacing.large,
  },
  paymentMethodLogo: {
    width: 50,
    height: 55,
  },
  paymentMethodText: {
    color: Colors.white,
    fontSize: 28,
    fontWeight: "600",
  },
  selectedPaymentMethod: {
    borderWidth: 2,
    borderColor: Colors.white,
  },
});

export default MakePayment;
