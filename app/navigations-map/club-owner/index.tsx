import {
  clubOwnerTournamentRouteNames,
  clubOwnerTournamentRoutes,
} from "./tournament.config";

import {
  clubOwnerSettingRouteNames,
  clubOwnerSettingRoutes,
} from "./setting.config";

export const ClubOwnerRoutes = [
  ...clubOwnerSettingRoutes,
  ...clubOwnerTournamentRoutes,
];

export const ClubOwnerRouteNames = {
  ...clubOwnerSettingRouteNames,
  ...clubOwnerTournamentRouteNames,
};

export * from "./setting.config";
export * from "./tournament.config";
