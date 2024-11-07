import React from "react";
import MakePayment from "@/app/components/user-interface/shared-screens/makePayment";
import { fetchMe } from "@/app/components/app-container/appContainerSlice";
import { useAppDispatch } from "@/hooks/useReduxHooks";

const PlayerPayments = () => {
  const dispatch = useAppDispatch();

  const handlerPayment = async (selectedPaymentMethod: string) => {
    dispatch(fetchMe());
  };

  return <MakePayment handlerPayment={handlerPayment} />;
};

export default PlayerPayments;
