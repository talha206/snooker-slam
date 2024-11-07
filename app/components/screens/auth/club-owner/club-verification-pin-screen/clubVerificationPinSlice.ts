import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/store/createAppSlice";
import { verifyOtpForSignUp } from "@/app/network/opt/verify";

import {
  KeyForStorage,
  saveData,
} from "@/app/utils/storage_utils/storageUtils";

export interface clubVerificationPinSliceState {
  clubVerificationPin: string;
  accessToken: string | null;
  shouldSubmitToServer: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: clubVerificationPinSliceState = {
  clubVerificationPin: "",
  status: "idle",
  accessToken: "",
  shouldSubmitToServer: false,
};

export const clubVerificationPinSlice = createAppSlice({
  name: "clubVerificationPin",
  initialState,
  reducers: (create) => ({
    setClubVerificationPin: create.reducer((state, action: PayloadAction<string>) => {
      state.clubVerificationPin = action.payload;
    }),
    setShouldSubmitToServer: create.reducer((state, action: PayloadAction<boolean>) => {
      state.shouldSubmitToServer = action.payload;
    }),
    clearAccessToken: create.reducer((state) => {
      state.accessToken = null;
    }),

    submitClubVerificationAsync: create.asyncThunk(
      async ({
        phoneNo,
        clubVerificationPin,
      }: {
        phoneNo: string;
        clubVerificationPin: string;
      }) => {
        return await verifyOtpForSignUp({
          phone_no: phoneNo,
          verification_code: clubVerificationPin
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
          state.shouldSubmitToServer = false;
        },
      }
    ),
  }),

  selectors: {
    selectClubVerificationPin: (state) => state.clubVerificationPin,
    selectStatus: (state) => state.status,
    selectAccessToken: (state) => state.accessToken,
    selectShouldSubmitToServer: (state) => state.shouldSubmitToServer,
  },
});

export const { setClubVerificationPin, clearAccessToken, setShouldSubmitToServer, submitClubVerificationAsync } = clubVerificationPinSlice.actions;
export const { selectClubVerificationPin, selectStatus, selectAccessToken, selectShouldSubmitToServer } =
  clubVerificationPinSlice.selectors;