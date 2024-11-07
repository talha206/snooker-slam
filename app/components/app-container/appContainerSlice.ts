import { createAppSlice } from "@/store/createAppSlice"
import { User } from "@/app/types/models/user";
import { userSerializer } from "@/app/serializers"
import { me } from "@/app/network";
import { removeKey, KeyForStorage } from "@/app/utils/storage_utils/storageUtils";

export interface appContainerSliceState {
  error: string,
  status: "idle" | "loading" | "failed"
  currentUser?: User | null
}

const initialState: appContainerSliceState = {
  error: "",
  status: "idle",
}

export const appContainerSlice = createAppSlice({
  name: "appContainer",
  initialState,
  reducers: create => ({
    logout: create.reducer((state) => {
      removeKey(KeyForStorage.accessToken);
      state.currentUser = null;
    }),

    fetchMe: create.asyncThunk(
      async () => {
        return await me();
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.currentUser = userSerializer(action.payload);
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
  }),

  selectors: {
    selectStatus: state => state.status,
    selectError: state => state.status,
    selectCurrentUser: state => state.currentUser,
  },
})

export const { logout, fetchMe } =
  appContainerSlice.actions

export const { selectStatus, selectError, selectCurrentUser } = appContainerSlice.selectors