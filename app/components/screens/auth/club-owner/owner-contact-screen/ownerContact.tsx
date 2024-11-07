import React, { useEffect, useCallback } from "react";
import OnboardingMobileNumberGet from "@/app/components/user-interface/shared-screens/onboardingMobileNumberGet";
import { useAppSelector, useAppDispatch } from "@/hooks/useReduxHooks";
import { selectClubName } from "../club-name-screen/clubNameSlice";
import { selectClubOwnerName } from "../club-owner-name-screen/clubOwnerNameSlice";
import { useNavigation } from "@react-navigation/native";

import {
  submitRegisterAsync,
  resetResponseData,
  selectStatus,
  selectResponseData,
  setPhoneNo,
} from "./ownerContactSlice";

const OwnerContact = () => {
  const nav = useNavigation();
  const clubName = useAppSelector(selectClubName);
  const clubOwnerName = useAppSelector(selectClubOwnerName);
  const status = useAppSelector(selectStatus);
  const responseData = useAppSelector(selectResponseData);

  const dispatch = useAppDispatch();

  const navToClubVerificationPin = async (data: any) => {
    const phoneNo = `+92${data.phoneNo}`;
    dispatch(setPhoneNo(phoneNo));
    dispatch(submitRegisterAsync({ phoneNo, clubName, clubOwnerName }));
  };

  const navigateToClubVerificationPin = useCallback(async () => {
    const { CoreRouteNames } = await import("@/app/navigations-map/core");
    nav.navigate(CoreRouteNames.ClubVerificationPin);
  }, [nav]);

  useEffect(() => {
    if (responseData) {
      navigateToClubVerificationPin();
    }
  }, [responseData, navigateToClubVerificationPin]);

  useEffect(() => {
    return () => {
      dispatch(resetResponseData());
    };
  });

  return (
    <OnboardingMobileNumberGet
      handleFormSubmit={navToClubVerificationPin}
      actionBtnLabel={status === "loading" ? "Please wait..." : "Register"}
      title={"Mobile Number?"}
      subTitle={"Enter your mobile number below"}    />
  );
};

export default OwnerContact;
