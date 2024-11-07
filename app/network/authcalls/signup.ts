import { IUserClubInfo, IUserPlayerInfo, userInfo } from "@/app/types/auth"
import { API } from "../network"
import { notificationHandler } from "../notificationHandler"

export const authSignUp = async ({ userInfo }: { userInfo: userInfo }) => {
  try {
    const response = await API.POST({ URL: 'signup', headers: {}, data: userInfo })
    console.log('resp', response.data)
    return response
  } catch (e) {
    notificationHandler({ statusCode: (e as Error).message })
    throw e
  }
}

export const authSignUpClub = async ({ userClubInfo }: { userClubInfo: IUserClubInfo }) => {
  try {
    const response = await API.POST({ URL: 'signup_club', headers: {}, data: userClubInfo })
    console.log('resp', response.data)
    return response.data
  } catch (e: any) {
    const errors = e.response.data.errors;
    notificationHandler({ statusCode: errors[0] })
    throw e
  }
}

export const authSignUpPlayer = async ({ userPlayerInfo }: { userPlayerInfo: IUserPlayerInfo }) => {
  try {
    const response = await API.POST({ URL: 'signup_player', headers: {}, data: userPlayerInfo })
    console.log('resp', response.data)
    return response.data
  } catch (e: any) {
    const errors = e.response.data.errors;
    notificationHandler({ statusCode: errors[0] })
    throw e
  }
}
