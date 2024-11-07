import { IRoutes } from "@/app/types/routes";
import PlayerContact from "@/app/components/screens/auth/player/player-contact-screen/playerContact";
import PlayerAccountCreatedScreen from "@/app/components/screens/auth/player/player-account-created-screen/playerAccountCreated";
import PlayerPayments from "@/app/components/screens/auth/player/payment-screen/playerPayments";
import PaymentCompleted from "@/app/components/screens/auth/player/payment-completed-screen/paymentCompleted";
import SignInVerification from "@/app/components/screens/auth/player/sign-in-verification-screen/signInVerification";
import ForgotPin from "@/app/components/screens/auth/forgot-pin-screen/forgotPin";
import SignInPinSetupScreen from "@/app/components/screens/auth/player/sign-in-pin-setup-screen/signInPinSetUp";

export const CoreRouteNamesPlayer = {
  PinSetUp: "PinSetUp",
  PlayerContact: "PlayerContact",
  PlayerAccountCreated: "PlayerAccountCreated",
  PlayerPayments: "PlayerPayments",
  PaymentCompleted: "PaymentCompleted",
  SignInVerification: "SignInVerification",
  ForgotPin: "ForgotPin",
  SignInPinSetup: "SignInPinSetup"
};

export const CoreRoutesPlayer: IRoutes = [
  {
    component: PlayerContact,
    title: CoreRouteNamesPlayer.PlayerContact,
  },
  {
    component: PlayerAccountCreatedScreen,
    title: CoreRouteNamesPlayer.PlayerAccountCreated,
  },
  {
    component: PlayerPayments,
    title: CoreRouteNamesPlayer.PlayerPayments,
  },
  {
    component: PaymentCompleted,
    title: CoreRouteNamesPlayer.PaymentCompleted,
  },
  {
    component: SignInVerification,
    title: CoreRouteNamesPlayer.SignInVerification,
  },
  {
    component: ForgotPin,
    title: CoreRouteNamesPlayer.ForgotPin,
  },
  {
    component: SignInPinSetupScreen,
    title: CoreRouteNamesPlayer.SignInPinSetup,
  },
];
