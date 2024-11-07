import React from "react";
import { Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useScreenSize from "@/hooks/useScreenSize";
import PaymentStatus from "@/app/components/user-interface/shared-screens/paymentStatus";

const PaymentFailedScreen = () => {
  const nav = useNavigation();
  const { isSmall } = useScreenSize();

  const handlerContinue = async () => {};

  return (
    <PaymentStatus
      icon={
        <Image
          source={require("@/assets/images/payment-failed.png")}
          style={[styles.messageImg, isSmall && styles.smallMessageImg]}
        />
      }
      title="Payment Failed!"
      description="Transaction failed due to insufficient funds, Please check your account and try again."
      handlerContinue={handlerContinue}
    />
  );
};

const styles = StyleSheet.create({
  messageImg: {
    width: 150,
    height: 200,
    alignSelf: "center",
  },
  smallMessageImg: {
    width: 120,
    height: 120,
  },
});

export default PaymentFailedScreen;