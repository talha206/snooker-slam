import { API } from "../network"
import { notificationHandler } from "../notificationHandler"

export const verifyOtpForSignUp = async ({ phone_no, verification_code }: { phone_no: string, verification_code: string }) => {
  try {
    const response = await API.POST({
      URL: 'verify',
      headers: {},
      data: {
        phone_no, verification_code
      }
    })
    console.log('resp', response.data)
    return response.data
  } catch (e) {
    notificationHandler({ statusCode: (e as Error).message })
    throw e;
  }
}