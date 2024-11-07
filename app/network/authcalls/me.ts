import { API } from "../network"
import { retriveData, KeyForStorage } from "@/app/utils/storage_utils/storageUtils";
import { notificationHandler } from "../notificationHandler";

export const me = async () => {
  try {
    const token = await retriveData(KeyForStorage.accessToken);

    const response = await API.GET({
      URL: 'users/me', headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  } catch (e: any) {
    notificationHandler({ statusCode: 'credentials_invalid' })
    throw e
  }
}