import React, { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import OnboardingMobileNumberGet from "@/app/components/user-interface/shared-screens/onboardingMobileNumberGet";

import {
  setPhoneNo,
  submitOtpCodeToPhone,
  selectStatus,
  selectResponseData,
  clearResponseData,
} from "./forgotPinSlice";

const ForgotPin: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const responseData = useAppSelector(selectResponseData);
  const nav = useNavigation();

  const handlerFormSubmit = (data: any) => {
    const phoneNo = `+92${data.phoneNo}`;
    dispatch(setPhoneNo(phoneNo));
    dispatch(submitOtpCodeToPhone({ phoneNo }));
  };

  const navigateToVerificationPin = useCallback(async () => {
    const { CoreRouteNames } = await import("@/app/navigations-map/core");
    nav.navigate(CoreRouteNames.OtpCode);
  }, [nav]);

  useEffect(() => {
    if (responseData) {
      navigateToVerificationPin();
    }

    return () => {
      dispatch(clearResponseData());
    };
  }, [dispatch, responseData, navigateToVerificationPin]);

  return (
    <OnboardingMobileNumberGet
      title="Forgot Pin?"
      subTitle="Enter your mobile number to receive OTP"
      handleFormSubmit={handlerFormSubmit}
      actionBtnLabel={status === "loading" ? "Please wait..." : "Continue"}
    />
  );
};

export default ForgotPin;
