
export const UserState = {
  unAuthenticated: 'unAuthenticated',
  Admin: 'Admin',
  ClubOwner: 'Coordinator',
  Player: 'Player',
  BA: 'BA',
}

export interface userInfo {
  first_name: string
  last_name: string
  user_role: string
  email: string
  phone_no: string
  pin: string
  avatar: string
  username: string
  club_name: string
  cnic: string
  dob: string
  city: string;
}

export interface IUserClubInfo {
  user: {
    club_name: string
    club_external_id: string
    club_owner_name: string
    phone_no: string
  }
}

export interface IUserAttributeInterface {
  phoneNo: string
  avatarUrl: string
}

export interface IUserRelationshipsInterface {
  roles: { data: { id: string, type: string }[] }
}

export interface ISignUpClub {
  userAttribute: IUserAttributeInterface
  relationships: IUserRelationshipsInterface
}
export interface signInInfo {
  phone_no: string;
  pin: string;
}

export interface IForgotPassword {
  phone_no: string;
}

export interface IAuthSliceState {
  isAuthenticated: boolean
  userState: string
  userInfo: userInfo;
  activeNavigator: any;
  screenToVisit?: string
  signInInfo: signInInfo;
  loading: boolean;
}

export interface SignUpScreen {
  title?: string;
  subTitle?: string;
  keyboardType?: any;
  field_placeholder?: string;
  activeStep?: number
  nextScreen?: string;
  fieldName?: any;
  no_of_steps?: number;
}


export interface IUserPlayerInfo {
  user: {
    phone_no: string
  }
}

export type SignUpUserField = 'club_name' | 'name' | 'phone_no'