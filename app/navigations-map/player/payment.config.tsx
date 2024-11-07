import { IRoutes } from "@/app/types/routes";

import PlayerPayments from "@/app/components/screens/player/player-payments-screen/playerPayments";
import PaymentCompleted from "@/app/components/screens/player/payment-completed-screen/paymentCompleted";
import PaymentFailed from "@/app/components/screens/player/payment-failed-screen/paymentFailed";
import Payment from "@/app/components/screens/player/payment-screen/payment";

export const PlayerPaymentRouteNames = {
  PlayerPayments: "PlayerPayments",
  Payment: "Payment",
  PaymentCompleted: "PaymentCompleted",
  PaymentFailed: "PaymentFailed",
};

export const PlayerPaymentRoutes: IRoutes = [
  {
    component: PlayerPayments,
    title: PlayerPaymentRouteNames.PlayerPayments,
  },
  {
    component: Payment,
    title: PlayerPaymentRouteNames.Payment,
  },
  {
    component: PaymentCompleted,
    title: PlayerPaymentRouteNames.PaymentCompleted,
  },
  {
    component: PaymentFailed,
    title: PlayerPaymentRouteNames.PaymentFailed,
  },
];
