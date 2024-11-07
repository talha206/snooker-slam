import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { appContainerSlice } from "@/app/components/app-container/appContainerSlice";
import { signInSlice } from "@/app/components/screens/auth/sign-in-screen/signInSlice"
import { clubNameSlice } from "@/app/components/screens/auth/club-owner/club-name-screen/clubNameSlice";
import { clubOwnerNameSlice } from "@/app/components/screens/auth/club-owner/club-owner-name-screen/clubOwnerNameSlice";
import { ownerContactSlice } from "@/app/components/screens/auth/club-owner/owner-contact-screen/ownerContactSlice";
import { clubOwnerPinSetUpSlice } from "@/app/components/screens/auth/club-owner/club-owner-pin-setup-screen/clubOwnerPinSetUpSlice";
import { playerContactSlice } from "@/app/components/screens/auth/player/player-contact-screen/playerContactSlice";
import { verificationPinSlice } from "@/app/components/screens/auth/player/verification-pin-screen/verificationPinSlice";
import { clubVerificationPinSlice } from "@/app/components/screens/auth/club-owner/club-verification-pin-screen/clubVerificationPinSlice";
import { playerVerificationPinSlice } from "@/app/components/screens/auth/player/sign-in-verification-screen/signInVerificationSlice";
import { playerPinSetUpSlice } from "@/app/components/screens/auth/player/sign-in-pin-setup-screen/signInPinSetUpSlice";
import { forgotPinSlice } from "@/app/components/screens/auth/forgot-pin-screen/forgotPinSlice";
import { otpCodeSlice } from "@/app/components/screens/auth/otp-code-screen/otpCodeSlice";
import { setupPinSlice } from "@/app/components/screens/auth/setup-pin-screen/setupPinSlice";
// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(
  appContainerSlice,
  signInSlice,
  clubNameSlice, clubOwnerNameSlice, ownerContactSlice,
  playerContactSlice, verificationPinSlice, clubVerificationPinSlice,
   clubOwnerPinSetUpSlice, playerVerificationPinSlice,
  playerPinSetUpSlice, forgotPinSlice,otpCodeSlice, setupPinSlice,
)

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware()//.concat(quotesApiSlice.middleware)
    },
    preloadedState,
  })
  // configure listeners using the provided defaults
  // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
