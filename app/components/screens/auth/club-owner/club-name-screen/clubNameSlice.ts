import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "@/store/createAppSlice"

export interface clubNameSliceState {
  clubName: string,
}

const initialState: clubNameSliceState = {
  clubName: "",
}

export const clubNameSlice = createAppSlice({
  name: "clubName",
  initialState,
  reducers: create => ({
    setClubName: create.reducer((state, action: PayloadAction<string>) => {
      state.clubName = action.payload;
    }),
  }),

  selectors: {
    selectClubName: state => state.clubName,
  },
})

export const { setClubName } =
  clubNameSlice.actions

export const { selectClubName } = clubNameSlice.selectors