import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "@/store/createAppSlice"

export interface clubOwnerNameSliceState {
  clubOwnerName: string,
}

const initialState: clubOwnerNameSliceState = {
  clubOwnerName: "",
}

export const clubOwnerNameSlice = createAppSlice({
  name: "clubOwnerName",
  initialState,
  reducers: create => ({
    setClubOwnerName: create.reducer((state, action: PayloadAction<string>) => {
      state.clubOwnerName = action.payload;
    }),
  }),

  selectors: {
    selectClubOwnerName: state => state.clubOwnerName,
  },
})

export const { setClubOwnerName } =
  clubOwnerNameSlice.actions

export const { selectClubOwnerName } = clubOwnerNameSlice.selectors