import React from "react";
import { useNavigation } from "@react-navigation/native";
import AccountCreated from "@/app/components/user-interface/shared-screens/accountCreated";

const AccountCreatedScreen = () => {
  const nav = useNavigation();
  const navToSignInOwner = async () => {
    const { CoreRouteNames } = await import("@/app/navigations-map/core");
    nav.navigate(CoreRouteNames.SignIn);
  };

  return (
    <AccountCreated
      heading="Account Created!"
      description="Thanks for signing up with Snooker Slam. Our Brand Ambassador shall get in touch shortly on your registered number."
      handlerContinue={navToSignInOwner}
    />
  );
};

export default AccountCreatedScreen;
