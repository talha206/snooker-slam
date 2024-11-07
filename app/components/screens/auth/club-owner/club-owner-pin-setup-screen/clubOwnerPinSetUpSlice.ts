import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/store/createAppSlice";
import { apiSetPin } from "@/app/network/authcalls";

export interface clubOwnerPinSetUpSliceState {
  pin: string;
  status: "idle" | "loading" | "failed";
  responseData: any;
  shouldSubmitPin: boolean;
}

const initialState: clubOwnerPinSetUpSliceState = {
  pin: "",
  status: "idle",
  shouldSubmitPin: false,
  responseData: null,
};

export const clubOwnerPinSetUpSlice = createAppSlice({
  name: "clubOwnerPinSetUp",
  initialState,
  reducers: (create) => ({
    setPin: create.reducer((state, action: PayloadAction<string>) => {
      state.pin = action.payload;
    }),

    setShouldSubmitPin: create.reducer((state, action: PayloadAction<boolean>) => {
      state.shouldSubmitPin = action.payload;
    }),

    resetResponseData: create.reducer((state) => {
      state.responseData = null;
    }),

    submitPinSetupAsync: create.asyncThunk(
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
    selectShouldSubmitPin: (state) => state.shouldSubmitPin,
  },
});

// Export actions and selectors
export const { setPin, resetResponseData, setShouldSubmitPin, submitPinSetupAsync } = clubOwnerPinSetUpSlice.actions;
export const { selectPin, selectShouldSubmitPin, selectStatus, selectResponseData } = clubOwnerPinSetUpSlice.selectors;
