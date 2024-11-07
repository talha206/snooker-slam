import React, { useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import MobileVerification from "@/app/components/user-interface/shared-screens/mobileVerfication";
import {
  selectAccessToken,
  setPlayerVerificationPin,
  setShouldSubmitToServer,
  selectPlayerVerificationPin,
  selectShouldSubmitToServer,
  selectStatus,
  clearAccessToken,
  submitPlayerVerificationAsync,
} from "./signInVerificationSlice";

import { selectPhoneNo } from "../player-contact-screen/playerContactSlice";

const SignInVerification = () => {
  const dispatch = useAppDispatch();
  const pin = useAppSelector(selectPlayerVerificationPin);
  const shouldSubmitToServer = useAppSelector(selectShouldSubmitToServer);
  const accessToken = useAppSelector(selectAccessToken);
  const status = useAppSelector(selectStatus);
  const phoneNo = useAppSelector(selectPhoneNo);

  const nav = useNavigation();

  const navToSignInPinSetUp = useCallback(async () => {
    const { CoreRouteNames } = await import(
      "@/app/navigations-map/core/auth/index"
    );
    nav.navigate(CoreRouteNames.SignInPinSetup);
  }, [nav]);

  const handlerFormSubmit = () => {
    dispatch(setShouldSubmitToServer(true));
  };

  const handlerPinChange = (pin: string) => {
    dispatch(setPlayerVerificationPin(pin));
  };

  useEffect(() => {
    if (shouldSubmitToServer && pin) {
      dispatch(
        submitPlayerVerificationAsync({ phoneNo, clubVerificationPin: pin })
      );
    }
  }, [dispatch, phoneNo, pin, shouldSubmitToServer]);

  useEffect(() => {
    if (accessToken) {
      navToSignInPinSetUp();
    }
  }, [accessToken, navToSignInPinSetUp]);

  useEffect(() => {
    return () => {
      dispatch(clearAccessToken());
      dispatch(setPlayerVerificationPin(""));
      dispatch(setShouldSubmitToServer(false));
    };
  }, [dispatch]);

  return (
    <MobileVerification
      btnLabel={status === "loading" ? "Please wait..." : "Continue"}
      handlerPinChange={handlerPinChange}
      handlerFormSubmit={handlerFormSubmit}
    />
  );
};

export default SignInVerification;
