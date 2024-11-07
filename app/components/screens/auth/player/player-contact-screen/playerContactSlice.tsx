import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/store/createAppSlice";
import { authSignUpPlayer } from "@/app/network";
import { IUserPlayerInfo } from "@/app/types/auth";

export interface playerContactSliceState {
  phoneNo: string;
  status: "idle" | "loading" | "failed";
  responseData: any;
}

const initialState: playerContactSliceState = {
  phoneNo: "",
  status: "idle",
  responseData: null,
};

export const playerContactSlice = createAppSlice({
  name: "playerContact",
  initialState,
  reducers: (create) => ({
    setPhoneNo: create.reducer((state, action: PayloadAction<string>) => {
      state.phoneNo = action.payload;
    }),

    clearResponseData: create.reducer((state) => {
      state.responseData = null;
    }),

    submitRegisterAsync: create.asyncThunk(
      async ({ phoneNo }: { phoneNo: string }) => {
        const payload: IUserPlayerInfo = {
          user: {
            phone_no: phoneNo,
          },
        };

        return await authSignUpPlayer({ userPlayerInfo: payload });
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
    selectPhoneNo: (state: { phoneNo: any }) => state.phoneNo,
    selectStatus: (state: { status: any }) => state.status,
    selectResponseData: (state: { responseData: any }) => state.responseData,
  },
});

export const { setPhoneNo, clearResponseData, submitRegisterAsync } =
  playerContactSlice.actions;
export const { selectPhoneNo, selectStatus, selectResponseData } =
  playerContactSlice.selectors;
