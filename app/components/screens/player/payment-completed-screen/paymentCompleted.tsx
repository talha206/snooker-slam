import React from "react";
import { Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PaymentStatus from "../../../user-interface/shared-screens/paymentStatus";
import useScreenSize from "@/hooks/useScreenSize";

const PaymentCompleted = () => {
  const nav = useNavigation();
  const { isSmall } = useScreenSize();

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
      handlerContinue={()=>{}}
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
