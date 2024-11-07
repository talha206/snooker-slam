import React, { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import MobileVerification from "@/app/components/user-interface/shared-screens/mobileVerfication";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { selectPhoneNo } from "../owner-contact-screen/ownerContactSlice";

import {
  selectStatus,
  selectAccessToken,
  selectShouldSubmitToServer,
  selectClubVerificationPin,
  submitClubVerificationAsync,
  setClubVerificationPin,
  setShouldSubmitToServer,
  clearAccessToken,
} from "./clubVerificationPinSlice";

const ClubVerificationPin = () => {
  const nav = useNavigation();
  const phoneNo = useAppSelector(selectPhoneNo);
  const clubVerificationPin = useAppSelector(selectClubVerificationPin);
  const shouldSubmitToServer = useAppSelector(selectShouldSubmitToServer);
  const status = useAppSelector(selectStatus);
  const accessToken = useAppSelector(selectAccessToken);
  const dispatch = useAppDispatch();

  const navigateToPinSetUp = useCallback(async () => {
    const { CoreRouteNamesClubOwner } = await import(
      "@/app/navigations-map/core"
    );
    nav.navigate(CoreRouteNamesClubOwner.ClubOwnerPinSetUp);
  }, [nav]);

  const handlerPinChange = (pin: string) => {
    dispatch(setClubVerificationPin(pin));
  };

  useEffect(() => {
    if (accessToken) {
      navigateToPinSetUp();
    }
  }, [accessToken, navigateToPinSetUp]);

  useEffect(() => {
    if (shouldSubmitToServer) {
      dispatch(submitClubVerificationAsync({ phoneNo, clubVerificationPin }));
    }
  }, [phoneNo, clubVerificationPin, shouldSubmitToServer, dispatch]);

  const handleSubmit = () => {
    dispatch(setShouldSubmitToServer(true));
  };

  return (
    <MobileVerification
      btnLabel={status === "loading" ? "Please wait..." : "Continue"}
      handlerPinChange={handlerPinChange}
      handlerFormSubmit={handleSubmit}
    />
  );
};

export default ClubVerificationPin;
