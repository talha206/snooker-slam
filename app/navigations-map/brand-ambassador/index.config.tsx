import { IRoutes } from "@/app/types/routes";
import CompleteInfoScreen from "@/app/components/screens/brand-ambassador/complete-info-screen/completeInfo";
import Home from "@/app/components/screens/player/home-screen/homePlayer";
import Rejected from "@/app/components/screens/brand-ambassador/rejected-screen/rejected";
import Approved from "@/app/components/screens/brand-ambassador/approved-screen/approved";
import Pending from "@/app/components/screens/brand-ambassador/pending-screen/pending";
import ClubInfo from "@/app/components/screens/brand-ambassador/club-info-screen/clubInfo";
import NoOfClub from "@/app/components/screens/brand-ambassador/no-of-club-screen/noOfClub";
import EmailScreen from "@/app/components/screens/brand-ambassador/email-screen/email";
import CNICScreen from "@/app/components/screens/brand-ambassador/cnic-screen/cnic";
import CityScreen from "@/app/components/screens/brand-ambassador/city-screen/city";
import AreaScreen from "@/app/components/screens/brand-ambassador/area-screen/area";
import InformationSubmittedScreen from "@/app/components/screens/brand-ambassador/information-submitted-screen/informationSubmitted";

export const BaRouteNames = {
    Home:"Overview",
    Rejected:"Rejected",
    Approved:"Approved",
    Pending:"Pending",
    ClubInfo:"ClubInfo",
    NoOfClub:"NoOfClub",
    EmailScreen:"EmailScreen",
    CNICScreen:"CNICScreen",
    CityScreen:"CityScreen",
    AreaScreen:"Area",
    InformationSubmittedScreen:"InformationSubmitted",
    CompleteInfoScreen:"CompleteInfo"
}

export const BaRoutes: IRoutes = [
    {
        component: Home,
        title: BaRouteNames.Home
    },
    {
        component: Rejected,
        title: BaRouteNames.Rejected
    },
    {
        component: Approved,
        title: BaRouteNames.Approved
    },
    {
        component: Pending,
        title: BaRouteNames.Pending
    },
    {
        component: ClubInfo,
        title: BaRouteNames.ClubInfo
    },
    {
        component: NoOfClub,
        title: BaRouteNames.NoOfClub
    },
    {
        component: EmailScreen,
        title: BaRouteNames.EmailScreen
    },
    {
        component: CNICScreen,
        title: BaRouteNames.CNICScreen
    },
    {
        component: CityScreen,
        title: BaRouteNames.CityScreen
    },
    {
        component: AreaScreen,
        title: BaRouteNames.AreaScreen
    },
    {
        component: InformationSubmittedScreen,
        title: BaRouteNames.InformationSubmittedScreen
    },
    {
        component: CompleteInfoScreen,
        title: BaRouteNames.CompleteInfoScreen
    },
]