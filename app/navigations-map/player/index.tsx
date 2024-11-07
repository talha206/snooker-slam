import { PlayerPaymentRoutes, PlayerPaymentRouteNames } from "./payment.config";
import { PlayerSettingRoutes, PlayerSettingRouteNames } from "./setting.config";

import {
  PlayerSubscriptionRoutes,
  PlayerSubscriptionRouteNames,
} from "./subscription.config";

import {
  PlayerTournamentRoutes,
  PlayerTournamentRouteNames,
} from "./tournament.config";

export const PlayerRoutes = [
  ...PlayerTournamentRoutes,
  ...PlayerPaymentRoutes,
  ...PlayerSettingRoutes,
  ...PlayerSubscriptionRoutes,
];

export const PlayerRouteNames = {
  ...PlayerPaymentRouteNames,
  ...PlayerSettingRouteNames,
  ...PlayerSubscriptionRouteNames,
  ...PlayerTournamentRouteNames,
};

export * from "./tournament.config";
export * from "./subscription.config";
export * from "./payment.config";
export * from "./setting.config";
