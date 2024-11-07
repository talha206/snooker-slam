import React from "react";
import { useNavigation } from "@react-navigation/native";
import AccountCreated from "@/app/components/user-interface/shared-screens/accountCreated";

const PlayerAccountCreatedScreen = () => {
  const nav = useNavigation();
  const navToPayment = async () => {
    const { CoreRouteNamesPlayer } = await import("@/app/navigations-map/core");
    nav.navigate(CoreRouteNamesPlayer.PlayerPayments);
  };

  return (
    <AccountCreated
      heading="Account Created!"
      description="You have successfully registered as a player, Please continue to pay your registration"
      handlerContinue={navToPayment}
    />
  );
};

export default PlayerAccountCreatedScreen;
