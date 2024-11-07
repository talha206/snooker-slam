import React, { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import MobileVerification from "@/app/components/user-interface/shared-screens/mobileVerfication";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { selectPhoneNo } from "../player-contact-screen/playerContactSlice";
import { selectResponseData, selectStatus, selectVerificationPin, submitVerificationAsync } from "./verificationPinSlice";

const VerificationPinScreen = () => {
  const nav = useNavigation();
  const phoneNo = useAppSelector(selectPhoneNo);
  const verificationPin = useAppSelector(selectVerificationPin);
  const status = useAppSelector(selectStatus);
  const responseData = useAppSelector(selectResponseData);

  const dispatch = useAppDispatch();
  
  const navToPinSetUp = async () => {
    dispatch(submitVerificationAsync({ phoneNo, verificationPin }));
  };
    const navigateToPinSetUp = useCallback(async () => {
    const { CoreRouteNamesPlayer } = await import("@/app/navigations-map/core");
    nav.navigate(CoreRouteNamesPlayer.PinSetUp);
  },[nav]);
  
  useEffect(() => {
    if (responseData) {
      navigateToPinSetUp();
    }
  }, [responseData, navigateToPinSetUp]);

  return <MobileVerification handleFormSubmit={navToPinSetUp} />;
};

export default VerificationPinScreen;