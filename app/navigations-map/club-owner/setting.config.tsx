import { IRoutes } from "@/app/types/routes";

import Account from "@/app/components/screens/club-owner/account-screen/account";
import Settings from "@/app/components/screens/club-owner/settings-screen/settings";
import AccountInfo from "@/app/components/screens/club-owner/account-info-screen/accountInfo";
import { ClubOwnerTabNavigator } from "@/app/components/screens/club-owner/tab-navigation-screen/tabNavigator";
import Payments from "@/app/components/screens/club-owner/payments-screen/payments";
import Players from "@/app/components/screens/club-owner/players-screen/players";
import PlayerInfo from "@/app/components/screens/club-owner/player-info-screen/playerInfo";
import Support from "@/app/components/screens/club-owner/support-screen/support";
import ChangePin from "@/app/components/screens/club-owner/change-pin-screen/changePin";
import DeleteAccount from "@/app/components/screens/club-owner/delete-account-screen/deleteAccount";


export const clubOwnerSettingRouteNames = {
  Home: "ClubOwnerTabNavigator",
  Account: "Account",
  AccountInfo: "AccountInfo",
  Payments: "Payments",
  Players: "Players",
  PlayerInfo: "PlayerInfo",
  Support: "Support",
  Settings: "Settings",
  ChangePin: "ChangePin",
  DeleteAccount: "DeleteAccount",
};

export const clubOwnerSettingRoutes: IRoutes = [
  {
    component: ClubOwnerTabNavigator,
    title: clubOwnerSettingRouteNames.Home,
  },
  {
    component: Account,
    title: clubOwnerSettingRouteNames.Account,
  },
  {
    component: AccountInfo,
    title: clubOwnerSettingRouteNames.AccountInfo,
  },
  {
    component: Payments,
    title: clubOwnerSettingRouteNames.Payments,
  },
  {
    component: Players,
    title: clubOwnerSettingRouteNames.Players,
  },
  {
    component: PlayerInfo,
    title: clubOwnerSettingRouteNames.PlayerInfo,
  },
  {
    component: Support,
    title: clubOwnerSettingRouteNames.Support,
  },
  {
    component: Settings,
    title: clubOwnerSettingRouteNames.Settings,
  },
  {
    component: ChangePin,
    title: clubOwnerSettingRouteNames.ChangePin,
  },
  {
    component: DeleteAccount,
    title: clubOwnerSettingRouteNames.DeleteAccount,
  },
];
