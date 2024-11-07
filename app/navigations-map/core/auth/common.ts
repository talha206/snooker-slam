import { IRoutes } from "@/app/types/routes";
import SignInScreen from "@/app/components/screens/auth/sign-in-screen/signIn";
import GettingStartedScreen from "@/app/components/screens/auth/getting-started-screen/gettingStarted";
import RoleSelectScreen from "@/app/components/screens/auth/role-select-screen/roleSelect";
import OtpCodeScreen from "@/app/components/screens/auth/otp-code-screen/otpCode";
import SetupPinScreen from "@/app/components/screens/auth/setup-pin-screen/setupPin";

export const CoreRouteNamesCommon = {
  GettingStarted: "GettingStarted",
  SignIn: "SignIn",
  Role: "RoleSelect",
  OtpCode:"OtpCode",
  SetupPin:"SetupPin"
};

export const CoreRoutesCommon: IRoutes = [
  {
    component: GettingStartedScreen,
    title: CoreRouteNamesCommon.GettingStarted,
  },
  {
    component: SignInScreen,
    title: CoreRouteNamesCommon.SignIn,
  },
  {
    component: RoleSelectScreen,
    title: CoreRouteNamesCommon.Role,
  },
  {
    component: OtpCodeScreen,
    title: CoreRouteNamesCommon.OtpCode,
  },
  {
    component: SetupPinScreen,
    title: CoreRouteNamesCommon.SetupPin,
  }
];
