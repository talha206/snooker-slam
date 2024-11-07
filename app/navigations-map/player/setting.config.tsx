import { IRoutes } from "@/app/types/routes";

import PlayerAccountInfo from "@/app/components/screens/player/player-account-info/playerAccountInfo";
import PlayerAccount from "@/app/components/screens/player/player-account-screen/playerAccount";
import PlayerUsername from "@/app/components/screens/player/player-username-screen/playerUsername";
import PlayerName from "@/app/components/screens/player/player-name-screen/playerName";
import { PlayerTabNavigator } from "@/app/components/screens/player/tab-navigator/tabNavigator";
import PlayerCNIC from "@/app/components/screens/player/player-cnic-screen/playerCNIC";
import PlayerDOB from "@/app/components/screens/player/player-dob-screen/playerDOB";
import PlayerEmail from "@/app/components/screens/player/player-email-screen/playerEmail";
import PlayerCity from "@/app/components/screens/player/player-city-screen/playerCity";
import PlayerRanking from "@/app/components/screens/player/player-ranking-screen/playerRanking";
import PlayerSupport from "@/app/components/screens/player/player-support-screen/playerSupport";
import PlayerSetting from "@/app/components/screens/player/player-setting-screen/playerSetting";
import ChangePlayerPin from "@/app/components/screens/player/change-player-pin-screen/changePlayerPin";
import DeletePlayerAccount from "@/app/components/screens/player/delete-player-account-screen/deletePlayerAccount";
import ProfileCompleted from "@/app/components/screens/player/profile-completed-screen/profileCompleted";

export const PlayerSettingRouteNames = {
  PlayerHome: "PlayerTabNavigator",
  PlayerAccount: "PlayerAccount",
  PlayerAccountInfo: "PlayerAccountInfo",
  PlayerName: "PlayerName",
  playerUsername: "PlayerUsername",
  playerCNIC: "PlayerCNIC",
  PlayerDOB: "PlayerDOB",
  PlayerEmail: "PlayerEmail",
  PlayerCity: "PlayerCity",
  ProfileCompleted: "ProfileCompleted",
  PlayerRanking: "PlayerRanking",
  PlayerSupport: "PlayerSupport",
  PlayerSetting: "PlayerSetting",
  ChangePlayerPin: "ChangePlayerPin",
  DeletePlayerAccount: "DeletePlayerAccount",
};

export const PlayerSettingRoutes: IRoutes = [
  {
    component: PlayerTabNavigator,
    title: PlayerSettingRouteNames.PlayerHome,
  },
  {
    component: PlayerAccount,
    title: PlayerSettingRouteNames.PlayerAccount,
  },
  {
    component: PlayerAccountInfo,
    title: PlayerSettingRouteNames.PlayerAccountInfo,
  },
  {
    component: PlayerName,
    title: PlayerSettingRouteNames.PlayerName,
  },
  {
    component: PlayerUsername,
    title: PlayerSettingRouteNames.playerUsername,
  },
  {
    component: PlayerCNIC,
    title: PlayerSettingRouteNames.playerCNIC,
  },
  {
    component: PlayerDOB,
    title: PlayerSettingRouteNames.PlayerDOB,
  },
  {
    component: PlayerEmail,
    title: PlayerSettingRouteNames.PlayerEmail,
  },
  {
    component: PlayerCity,
    title: PlayerSettingRouteNames.PlayerCity,
  },
  {
    component: PlayerRanking,
    title: PlayerSettingRouteNames.PlayerRanking,
  },
  {
    component: PlayerSupport,
    title: PlayerSettingRouteNames.PlayerSupport,
  },
  {
    component: PlayerSetting,
    title: PlayerSettingRouteNames.PlayerSetting,
  },
  {
    component: ChangePlayerPin,
    title: PlayerSettingRouteNames.ChangePlayerPin,
  },
  {
    component: DeletePlayerAccount,
    title: PlayerSettingRouteNames.DeletePlayerAccount,
  },
  {
    component: ProfileCompleted,
    title: PlayerSettingRouteNames.ProfileCompleted,
  },
];
