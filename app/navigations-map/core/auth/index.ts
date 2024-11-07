import { CoreRouteNamesCommon, CoreRoutesCommon } from "./common";
import { CoreRouteNamesPlayer, CoreRoutesPlayer } from "./player";

import {
  CoreRouteNamesClubOwner,
  CoreRoutesClubOwner,
} from "./clubOwner";

export const CoreRoutes = [
  ...CoreRoutesCommon,
  ...CoreRoutesPlayer,
  ...CoreRoutesClubOwner,
];

export const CoreRouteNames = {
  ...CoreRouteNamesCommon,
  ...CoreRouteNamesPlayer,
  ...CoreRouteNamesClubOwner,
};

export * from "./clubOwner";
export * from "./common";
export * from "./player";
