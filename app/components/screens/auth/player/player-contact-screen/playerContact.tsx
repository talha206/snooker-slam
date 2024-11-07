import React, { useEffect, useCallback } from "react";
import OnboardingMobileNumberGet from "@/app/components/user-interface/shared-screens/onboardingMobileNumberGet";
import {
  submitRegisterAsync,
  selectStatus,
  setPhoneNo,
  selectResponseData,
  clearResponseData,
} from "./playerContactSlice";
import { useAppSelector, useAppDispatch } from "@/hooks/useReduxHooks";
import { useNavigation } from "@react-navigation/native";

const PlayerContact = () => {
  const nav = useNavigation();
  const status = useAppSelector(selectStatus);
  const responseData = useAppSelector(selectResponseData);

  const dispatch = useAppDispatch();

  const navToVerificationPin = async (data: any) => {
    const phoneNo = `+92${data.phoneNo}`;
    dispatch(setPhoneNo(phoneNo));
    dispatch(submitRegisterAsync({ phoneNo }));
  };

  const navigateToVerificationPin = useCallback(async () => {
    const { CoreRouteNames } = await import("@/app/navigations-map/core");
    nav.navigate(CoreRouteNames.SignInVerification);
  }, [nav]);

  useEffect(() => {
    if (responseData) {
      navigateToVerificationPin();
    }
  }, [responseData, navigateToVerificationPin]);

  useEffect(() => {
    return () => {
      dispatch(clearResponseData());
    };
  }, [dispatch]);

  return (
    <OnboardingMobileNumberGet
      handleFormSubmit={navToVerificationPin}
      actionBtnLabel={status === "loading" ? "Please wait..." : "Continue"}
    />
  );
};

export default PlayerContact;
