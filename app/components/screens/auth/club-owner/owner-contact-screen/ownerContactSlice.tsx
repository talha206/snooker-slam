import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "@/store/createAppSlice";
import { authSignUpClub } from "@/app/network";
import { IUserClubInfo } from "@/app/types/auth";

export interface ownerContactSliceState {
  phoneNo: string;
  status: "idle" | "loading" | "failed";
  responseData: any;
}

const initialState: ownerContactSliceState = {
  phoneNo: "",
  status: "idle",
  responseData: null,
};

export const ownerContactSlice = createAppSlice({
  name: "ownerContact",
  initialState,
  reducers: (create) => ({
    setPhoneNo: create.reducer((state, action: PayloadAction<string>) => {
      state.phoneNo = action.payload;
    }),

    resetResponseData: create.reducer((state) => {
      state.responseData = null;
    }),

    submitRegisterAsync: create.asyncThunk(
      async ({
        phoneNo,
        clubName,
        clubOwnerName,
      }: {
        phoneNo: string;
        clubName: string;
        clubOwnerName: string;
      }) => {
        const payload: IUserClubInfo = {
          user: {
            phone_no: phoneNo,
            club_external_id: phoneNo,
            club_name: clubName,
            club_owner_name: clubOwnerName,
          },
        };

        return await authSignUpClub({ userClubInfo: payload });
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
    selectPhoneNo: (state) => state.phoneNo,
    selectStatus: (state) => state.status,
    selectResponseData: (state) => state.responseData,
  },
});

export const { setPhoneNo, resetResponseData, submitRegisterAsync } =
  ownerContactSlice.actions;
export const { selectPhoneNo, selectStatus, selectResponseData } =
  ownerContactSlice.selectors;
