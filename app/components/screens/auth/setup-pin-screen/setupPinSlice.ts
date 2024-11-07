import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/store/createAppSlice";
import { apiSetPin } from "@/app/network/authcalls";

export interface setupPinSliceState {
  pin: string;
  status: "idle" | "loading" | "failed";
  responseData: any;
}

const initialState: setupPinSliceState = {
  pin: "",
  status: "idle",
  responseData: null,
};

export const setupPinSlice = createAppSlice({
  name: "setupPin",
  initialState,
  reducers: (create) => ({
    setPin: create.reducer((state, action: PayloadAction<string>) => {
      state.pin = action.payload;
    }),

    resetResponseData: create.reducer((state) => {
      state.responseData = null;
    }),

    submitSetupPinAsync: create.asyncThunk(
      async ({ pin }: { pin: string }) => {
        const payload = { pin };

        return await apiSetPin(payload);
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.responseData = 'done';
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
  }),

  selectors: {
    selectPin: (state) => state.pin,
    selectStatus: (state) => state.status,
    selectResponseData: (state) => state.responseData,
  },
});

export const { setPin, resetResponseData, submitSetupPinAsync } = setupPinSlice.actions;
export const { selectPin, selectStatus, selectResponseData } = setupPinSlice.selectors;
