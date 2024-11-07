import React, { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import MobileVerification from "@/app/components/user-interface/shared-screens/mobileVerfication";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { selectPhoneNo } from "../forgot-pin-screen/forgotPinSlice";
import {
  selectAccessToken,
  selectOtpCode,
  selectStatus,
  setOtpCode,
  submitOtpCodeAsync,
} from "./otpCodeSlice";

const OtpCodeScreen = () => {
  const nav = useNavigation();
  const phoneNo = useAppSelector(selectPhoneNo);
  const status = useAppSelector(selectStatus);
  const otpCode = useAppSelector(selectOtpCode);
  const accessToken = useAppSelector(selectAccessToken);
  const dispatch = useAppDispatch();

  const navigateToSetUpPin = useCallback(async () => {
    const { CoreRouteNames } = await import("@/app/navigations-map/core");
    nav.navigate(CoreRouteNames.SetupPin);
  }, [nav]);

  const handlerPinChange = (otpcode: string) => {
    dispatch(setOtpCode(otpcode));
  };

  useEffect(() => {
    if (accessToken) {
      navigateToSetUpPin();
    }
  }, [accessToken, navigateToSetUpPin]);

  const handlerSubmit = () => {
    if (otpCode && otpCode.length === 4) {
      dispatch(submitOtpCodeAsync({ phoneNo, otpCode }));
    }
  };

  return (
    <MobileVerification
      btnLabel={status === "loading" ? "Please wait..." : "Continue"}
      handlerPinChange={handlerPinChange}
      handlerFormSubmit={handlerSubmit}
    />
  );
};

export default OtpCodeScreen;
