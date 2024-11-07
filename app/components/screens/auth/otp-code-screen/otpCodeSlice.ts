import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/store/createAppSlice";
import { verifyOtpForSignUp } from "@/app/network/opt/verify";

import {
  KeyForStorage,
  saveData,
} from "@/app/utils/storage_utils/storageUtils";

export interface otpCodeSliceState {
  otpCode: string;
  accessToken: string | null;
  status: "idle" | "loading" | "failed";
}

const initialState: otpCodeSliceState = {
  otpCode: "",
  status: "idle",
  accessToken: "",
};

export const otpCodeSlice = createAppSlice({
  name: "otpCode",
  initialState,
  reducers: (create) => ({
    setOtpCode: create.reducer((state, action: PayloadAction<string>) => {
      state.otpCode = action.payload;
    }),
    clearAccessToken: create.reducer((state) => {
      state.accessToken = null;
    }),

    submitOtpCodeAsync: create.asyncThunk(
      async ({
        phoneNo,
        otpCode,
      }: {
        phoneNo: string;
        otpCode: string;
      }) => {
        return await verifyOtpForSignUp({
          phone_no: phoneNo,
          verification_code: otpCode
        });
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.accessToken = action.payload.access_token;
          saveData(KeyForStorage.accessToken, action.payload.access_token)
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
  }),

  selectors: {
    selectOtpCode: (state) => state.otpCode,
    selectStatus: (state) => state.status,
    selectAccessToken: (state) => state.accessToken,
  },
});

export const { setOtpCode, clearAccessToken, submitOtpCodeAsync } = otpCodeSlice.actions;
export const { selectOtpCode, selectStatus, selectAccessToken } =
  otpCodeSlice.selectors;