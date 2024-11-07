import React from "react";
import { useNavigation } from "@react-navigation/native";
import AccountCreated from "@/app/components/user-interface/shared-screens/accountCreated";

const InformationSubmittedScreen = () => {
  const nav = useNavigation();
  const navToCompleteInofScreen = async () => {
    const { BaRouteNames } = await import("@/app/navigations-map/brand-ambassador/index.config");
    nav.navigate(BaRouteNames.CompleteInfoScreen);
  };

  return (
    <AccountCreated
      heading="Information Submitted Successfully!"
      description="Thanks you for providing all the required details.Your submission is now under review and will be processed shortly"
      handlerContinue={navToCompleteInofScreen}
    />
  );
};

export default InformationSubmittedScreen;
