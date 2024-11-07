import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/store/createAppSlice";
import { verifyOtpForSignUp } from "@/app/network/opt/verify";

import {
  KeyForStorage,
  saveData,
} from "@/app/utils/storage_utils/storageUtils";

export interface playerVerificationPinSliceState {
  playerVerificationPin: string;
  accessToken: string | null;
  shouldSubmitToServer: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: playerVerificationPinSliceState = {
  playerVerificationPin: "",
  status: "idle",
  accessToken: "",
  shouldSubmitToServer: false,
};

export const playerVerificationPinSlice = createAppSlice({
  name: "playerVerificationPin",
  initialState,
  reducers: (create) => ({
    setPlayerVerificationPin: create.reducer((state, action: PayloadAction<string>) => {
      state.playerVerificationPin = action.payload;
    }),
    setShouldSubmitToServer: create.reducer((state, action: PayloadAction<boolean>) => {
      state.shouldSubmitToServer = action.payload;
    }),
    clearAccessToken: create.reducer((state) => {
      state.accessToken = null;
    }),

    submitPlayerVerificationAsync: create.asyncThunk(
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
    selectPlayerVerificationPin: (state) => state.playerVerificationPin,
    selectStatus: (state) => state.status,
    selectAccessToken: (state) => state.accessToken,
    selectShouldSubmitToServer: (state) => state.shouldSubmitToServer,
  },
});

export const { setPlayerVerificationPin, clearAccessToken, setShouldSubmitToServer, submitPlayerVerificationAsync } = playerVerificationPinSlice.actions;
export const { selectPlayerVerificationPin, selectStatus, selectAccessToken, selectShouldSubmitToServer } =
  playerVerificationPinSlice.selectors;