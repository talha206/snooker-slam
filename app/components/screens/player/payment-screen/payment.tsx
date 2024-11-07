import React from "react";
import { useNavigation } from "@react-navigation/native";
import MakePayment from "@/app/components/user-interface/shared-screens/makePayment";

const Payment = () => {
  const nav = useNavigation();

  const navToPaymentCompleted = async (selectedPaymentMethod: string) => {
    const { PlayerRouteNames } = await import("@/app/navigations-map/player/index");
    nav.navigate(PlayerRouteNames.PaymentCompleted);
  };

  return <MakePayment handlerPayment={navToPaymentCompleted} />;
};

export default Payment;