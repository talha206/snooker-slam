import React from "react";
import { useNavigation } from "@react-navigation/native";
import AccountCreated from "@/app/components/user-interface/shared-screens/accountCreated";

const ProfileCompleted = () => {
  const nav = useNavigation();
  
  const navToPlayerPayments= async () => {
    const { PlayerRouteNames } = await import("@/app/navigations-map/player");
    nav.navigate(PlayerRouteNames.PlayerPayments);
  };

  return (
    <AccountCreated
      heading="Profile Completed Successfully!"
      description="You can proceed with your profile with the button below"
      handlerContinue={navToPlayerPayments}
    />
  );
};

export default ProfileCompleted;