import MatchInfoScreen from "@/app/components/screens/player/match-schedule-info-screen/matchScheduleInfo";
import TournamentInfo from "@/app/components/screens/player/tournament-info-screen/tournamentInfo";
import Tournaments from "@/app/components/screens/player/tournaments-screen/tournaments";
import MatchScheduleInfo from "@/app/components/screens/player/match-schedule-info-screen/matchScheduleInfo";
import { IRoutes } from "@/app/types/routes";

export const PlayerTournamentRouteNames = {
  Tournaments: "Tournaments",
  TournamentInfo: "TournamentInfo",
  MatchSchedule: "MatchSchedule",
  MatchScheduleInfo: "MatchScheduleInfo",
};

export const PlayerTournamentRoutes: IRoutes = [
  {
    component: Tournaments,
    title: PlayerTournamentRouteNames.Tournaments,
  },
  {
    component: TournamentInfo,
    title: PlayerTournamentRouteNames.TournamentInfo,
  },
  {
    component: MatchInfoScreen,
    title: PlayerTournamentRouteNames.MatchSchedule,
  },
  {
    component: MatchScheduleInfo,
    title: PlayerTournamentRouteNames.MatchScheduleInfo,
  },
];
