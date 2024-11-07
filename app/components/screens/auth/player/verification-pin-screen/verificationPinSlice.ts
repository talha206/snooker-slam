import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/store/createAppSlice";
import { verifyOtpForSignUp } from "@/app/network/opt/verify";
import { signInInfo } from "@/app/types/auth";

export interface verificationPinSliceState {
  verificationPin: string;
  status: "idle" | "loading" | "failed";
  responseData: any;
}

const initialState: verificationPinSliceState = {
  verificationPin: "",
  status: "idle",
  responseData: null,
};

export const verificationPinSlice = createAppSlice({
  name: "verificationPin",
  initialState,
  reducers: (create) => ({
    setVerificationPin: create.reducer((state, action: PayloadAction<string>) => {
      state.verificationPin = action.payload;
    }),

    submitRegisterAsync: create.asyncThunk(
      async ({
        phoneNo,
        verificationPin,
      }: {
        phoneNo: string;
        verificationPin: string;
      }) => {
        const payload: signInInfo = {
          phone_no: phoneNo,
          pin: verificationPin,
        };

        return await verifyOtpForSignUp({ phone_no: phoneNo, verification_code: verificationPin });
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.responseData = action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
  }),

  selectors: {
    selectVerificationPin: (state) => state.verificationPin,
    selectStatus: (state) => state.status,
    selectResponseData: (state) => state.responseData,
  },
});

export const { setVerificationPin, submitRegisterAsync } = verificationPinSlice.actions;
export const { selectVerificationPin, selectStatus, selectResponseData } =
verificationPinSlice.selectors;