import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/store/createAppSlice";
import { authForgot } from "@/app/network";
import { IForgotPassword } from "@/app/types/auth";

export interface forgotPinSliceState {
  responseData: any;
  phoneNo: string;
  error: string;
  status: "idle" | "loading" | "failed";
}

const initialState: forgotPinSliceState = {
  phoneNo: "",
  error: "",
  status: "idle",
  responseData: null,
};

export const forgotPinSlice = createAppSlice({
  name: "forgotPin",
  initialState,
  reducers: (create) => ({
    setPhoneNo: create.reducer((state, action: PayloadAction<string>) => {
      state.phoneNo = action.payload;
    }),

    clearResponseData: create.reducer((state) => {
      state.responseData = null;
    }),

    submitOtpCodeToPhone: create.asyncThunk(
      async ({ phoneNo }: { phoneNo: string }) => {
        const payload: IForgotPassword = { phone_no: phoneNo };
        let result;
        try {
          result = await authForgot({ forgotInfo: payload });
        } catch (e) {
          console.error(e);
          throw e;
        }
        return result?.data;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.responseData = "done";
          state.status = "idle";
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
  }),

  selectors: {
    selectPhoneNo: (state) => state.phoneNo,
    selectStatus: (state) => state.status,
    selectError: (state) => state.error,
    selectResponseData: (state) => state.responseData,
  },
});

export const { setPhoneNo, submitOtpCodeToPhone, clearResponseData } =
  forgotPinSlice.actions;
export const { selectStatus, selectPhoneNo, selectError, selectResponseData } =
  forgotPinSlice.selectors;
