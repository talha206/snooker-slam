import { signInInfo } from "@/app/types/auth"
import { API } from "../network"
import { notificationHandler } from "../notificationHandler";

export const authLogin = async ({ signInInfo }: { signInInfo: signInInfo }) => {
  try {
    const response = await API.POST({ URL: 'login', headers: {}, data: signInInfo });
    console.log('resp', response.data);
    return response;
  } catch (e: any) {
    notificationHandler({ statusCode: 'credentials_invalid' })
    throw e
  }
}
