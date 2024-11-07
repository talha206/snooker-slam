import { Alert } from "react-native"

const notficationMessage = ({ statusCode }: { statusCode: string }) => {

  if (statusCode === '201' || statusCode === '204') {
    return {
      message: 'Success',
      type: 'Successfully done'
    }
  } else if (statusCode === '200') {
    return {
      message: 'Success',
      type: 'Successfully done'
    }
  } else if (statusCode === '400') {
    return {
      message: 'Bad Request',
      type: 'error'
    }
  } else if (statusCode === '401') {
    return {
      message: 'Unauthorized',
      type: 'You are not allow to access this page'
    }
  } else if (statusCode === '403') {
    return {
      message: 'Forbidden',
      type: 'Your are not allow to access this page'
    }
  } else if (statusCode === '404') {
    return {
      message: 'Not Found',
      type: 'Not found this page'
    }
  } else if (statusCode === '422') {
    return {
      message: 'Invalid input',
      type: 'Input entered is not valid'
    }
  } else if (statusCode === '700') {
    return {
      message: 'Pin not match ',
      type: 'Confirm pin and pin is not same!'
    }
  } else if (statusCode === '500') {
    return {
      message: 'Internal Server Error',
      type: 'It is not you it is us'
    }
  } else if (statusCode === 'credentials_invalid') {
    return {
      message: 'Phone/pin is incorrect',
      type: 'Please try again'
    }
  } else if (statusCode.includes('Phone no has already been taken')) {
    return {
      message: 'Phone no has already been taken',
      type: 'Please try again'
    }
  } else {
    return {
      message: 'Something went wrong',
      type: 'Please retry again'
    }
  }

}

export const notificationHandler = ({ statusCode }: { statusCode: string | number }) => {
  const { message, type } = notficationMessage({ statusCode: `${statusCode}` })

  console.log(statusCode, statusCode)

  Alert.alert(
    message,
    type,
    [
      {
        text: "Ok",
        style: "cancel"
      }
    ]
  );
}