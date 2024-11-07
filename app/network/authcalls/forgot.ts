import { IForgotPassword } from "@/app/types/auth"
import { API } from "../network"
import { notificationHandler } from "../notificationHandler";

export const authForgot = async ({ forgotInfo }: { forgotInfo: IForgotPassword }) => {
    try {
        const response = await API.POST({ URL: 'forgot_pin', headers: {}, data: forgotInfo });
        console.log('resp', response.data);
        return response;
    } catch (e: any) {
        notificationHandler({ statusCode: 500 })
        throw e
    }
}
