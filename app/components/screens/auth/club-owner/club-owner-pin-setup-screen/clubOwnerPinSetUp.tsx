import React, { useEffect } from "react";
import PinSetup from "@/app/components/user-interface/shared-screens/pinSetup";
import { useAppSelector, useAppDispatch } from "@/hooks/useReduxHooks";
import { fetchMe } from "@/app/components/app-container/appContainerSlice";
import {
  submitPinSetupAsync,
  selectResponseData,
  setPin,
  selectStatus,
  selectPin,
  resetResponseData,
} from "./clubOwnerPinSetUpSlice";

const ClubOwnerPinSetup = () => {
  const responseData = useAppSelector(selectResponseData);
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const pin = useAppSelector(selectPin);

  const handlerFormSubmit = () => {
    if (pin && pin.length >= 4) {
      dispatch(submitPinSetupAsync({ pin }));
    }
  };

  const handlerSetPin = (pin: string) => {
    dispatch(setPin(pin));
  };

  useEffect(() => {
    if (responseData) {
      dispatch(fetchMe());
    }
  }, [responseData, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(setPin(""));
      dispatch(resetResponseData());
    };
  }, [dispatch]);

  return (
    <PinSetup
      btnLabel={status === "loading" ? "Please wait..." : "Set PIN"}
      handlerPinChange={handlerSetPin}
      handlerFormSubmit={handlerFormSubmit}
    />
  );
};

export default ClubOwnerPinSetup;