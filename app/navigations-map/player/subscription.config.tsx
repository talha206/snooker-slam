
import ActivateSubscription from "@/app/components/screens/player/activate-subscription-screen/activateSubscription";
import CancelSubscription from "@/app/components/screens/player/cancel-subscription-screen/cancelSubscription";
import Subscription from "@/app/components/screens/player/subscription-screen/subscription";
import { IRoutes } from "@/app/types/routes";

export const PlayerSubscriptionRouteNames = {
  Subscription: "Subscription",
  CancelSubscription: "CancelSuscription",
  ActivateSubscription: "ActivateSubscription",
};

export const PlayerSubscriptionRoutes: IRoutes = [
  {
    component: Subscription,
    title: PlayerSubscriptionRouteNames.Subscription,
  },
  {
    component: CancelSubscription,
    title: PlayerSubscriptionRouteNames.CancelSubscription,
  },
  {
    component: ActivateSubscription,
    title: PlayerSubscriptionRouteNames.ActivateSubscription,
  },
];
