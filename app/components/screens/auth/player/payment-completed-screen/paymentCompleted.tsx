import React from "react";
import { Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useScreenSize from "@/hooks/useScreenSize";
import PaymentStatus from "@/app/components/user-interface/shared-screens/paymentStatus";

const PaymentCompleted = () => {
  const nav = useNavigation();
  const { isSmall } = useScreenSize();

  const navToSignIn = async () => {
    const { CoreRouteNames } = await import("@/app/navigations-map/core/auth/index");
    nav.navigate(CoreRouteNames.SignIn);
  };

  return (
    <PaymentStatus
      icon={
        <Image
          source={require("@/assets/images/payment-complete.png")}
          style={[styles.messageImg, isSmall && styles.smallMessageImg]}
        />
      }
      title="Payment Completed!"
      description="Your transaction has been completed successfully."
      handlerContinue={navToSignIn}
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

export default PaymentCompleted;
