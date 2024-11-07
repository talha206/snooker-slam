import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "@/store/createAppSlice"
import type { AppThunk } from "@/store"
import { authLogin, me } from "@/app/network"
import { signInInfo, userInfo } from "@/app/types/auth"
import {
  KeyForStorage,
  saveData,
} from "@/app/utils/storage_utils/storageUtils";

export interface signInSliceState {
  phoneNo: string,
  pin: string,
  error: string,
  accessToken: string,
  status: "idle" | "loading" | "failed"
}

const initialState: signInSliceState = {
  phoneNo: "",
  pin: "",
  error: "",
  status: "idle",
  accessToken: "",
}

export const signInSlice = createAppSlice({
  name: "signIn",
  initialState,
  reducers: create => ({
    setPhoneNo: create.reducer((state, action: PayloadAction<string>) => {
      state.phoneNo = action.payload;
    }),
    setPin: create.reducer((state, action: PayloadAction<string>) => {
      state.pin = action.payload;
    }),
    setAccessToken: create.reducer((state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    }),

    submitSignInAsync: create.asyncThunk(
      async ({ phoneNo, pin }: { phoneNo: string, pin: string }) => {
        const payload: signInInfo = { phone_no: phoneNo, pin }
        let result;
        try {
          result = await authLogin({ signInInfo: payload });
        } catch (e) {
          console.error(e)
          throw e
        }

        return result?.data;
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.accessToken = action.payload.access_token;
          saveData(KeyForStorage.accessToken, action.payload.access_token)
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
  }),

  selectors: {
    selectPhoneNo: state => state.phoneNo,
    selectPin: state => state.pin,
    selectStatus: state => state.status,
    selectError: state => state.error,
    selectAccessToken: state => state.accessToken,
  },
})

export const { setPhoneNo, setPin, setAccessToken, submitSignInAsync, } =
  signInSlice.actions

export const { selectStatus, selectPhoneNo, selectError, selectPin, selectAccessToken } = signInSlice.selectors