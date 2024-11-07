import { KeyForStorage, retriveData } from "@/app/utils/storage_utils/storageUtils"
import { API } from "../network"
import { notificationHandler } from "../notificationHandler"

export const apiSetPin = async ({ pin }: { pin: string }) => {
    try {
        const token = await retriveData(KeyForStorage.accessToken);

        const response = await API.PATCH({
            URL: 'users/set_pin', headers: {
                Authorization: `Bearer ${token}`
            }, data: { user: { pin: pin } }
        })
        return response.data
    } catch (e) {
        notificationHandler({ statusCode: (e as Error).message })
        throw e
    }
}
