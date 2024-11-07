import { IRoutes } from "@/app/types/routes";
import ClubNameScreen from "@/app/components/screens/auth/club-owner/club-name-screen/clubName";
import ClubOwnerNameScreen from "@/app/components/screens/auth/club-owner/club-owner-name-screen/clubOwnerName";
import OwnerContactScreen from "@/app/components/screens/auth/club-owner/owner-contact-screen/ownerContact";
import ClubOwnerPinChangedScreen from "@/app/components/screens/auth/club-owner/pin-changed-screen/pinChanged";
import AccountCreatedScreen from "@/app/components/screens/auth/club-owner/account-created-screen/accountCreated";
import ClubOwnerPinSetupScreen from "@/app/components/screens/auth/club-owner/club-owner-pin-setup-screen/clubOwnerPinSetUp";
import ClubVerificationPinScreen from "@/app/components/screens/auth/club-owner/club-verification-pin-screen/clubVerificationPin";

export const CoreRouteNamesClubOwner = {
  ClubName: "ClubName",
  ClubOwnerName: "ClubOwnerName",
  OwnerContact: "OwnerContact",
  PinChanged: "PinChanged",
  ClubOwnerPinSetUp: "ClubOwnerPinSetUp",
  AccountCreated: "AccountCreated",
  ClubVerificationPin: "ClubVerificationPin"
};

export const CoreRoutesClubOwner: IRoutes = [
  {
    component: ClubNameScreen,
    title: CoreRouteNamesClubOwner.ClubName,
  },
  {
    component: ClubOwnerNameScreen,
    title: CoreRouteNamesClubOwner.ClubOwnerName,
  },
  {
    component: OwnerContactScreen,
    title: CoreRouteNamesClubOwner.OwnerContact,
  },
  {
    component: ClubOwnerPinChangedScreen,
    title: CoreRouteNamesClubOwner.PinChanged,
  },
  {
    component: AccountCreatedScreen,
    title: CoreRouteNamesClubOwner.AccountCreated,
  },
  {
    component: ClubOwnerPinSetupScreen,
    title: CoreRouteNamesClubOwner.ClubOwnerPinSetUp,
  },
  {
    component: ClubVerificationPinScreen,
    title: CoreRouteNamesClubOwner.ClubVerificationPin,
  },
];
