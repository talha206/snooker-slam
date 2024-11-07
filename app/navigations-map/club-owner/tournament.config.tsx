import MatchSchedule from "@/app/components/screens/club-owner/match-schedule-screen/matchSchedule";
import TournamentsInfo from "@/app/components/screens/club-owner/tournaments-info-screen/tournamentsInfo";
import Tournaments from "@/app/components/screens/club-owner/tournaments-screen/tournaments";
import MatchScheduleInfo from "@/app/components/screens/club-owner/match-schedule-info-screen/matchScheduleInfo";

import { IRoutes } from "@/app/types/routes";



export const clubOwnerTournamentRouteNames = {
  Tournaments: "Tournaments",
  TournamentsInfo: "TournamentsInfo",
  MatchSchedule: "MatchSchedule",
  MatchScheduleInfo: "MatchScheduleInfo",
};

export const clubOwnerTournamentRoutes: IRoutes = [
  {
    component: Tournaments,
    title: clubOwnerTournamentRouteNames.Tournaments,
  },
  {
    component: TournamentsInfo,
    title: clubOwnerTournamentRouteNames.TournamentsInfo,
  },
  {
    component: MatchSchedule,
    title: clubOwnerTournamentRouteNames.MatchSchedule,
  },
  {
    component: MatchScheduleInfo,
    title: clubOwnerTournamentRouteNames.MatchScheduleInfo,
  },
];
