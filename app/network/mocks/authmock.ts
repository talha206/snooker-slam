import { API } from "../network"

export const authMock = async () =>{
 const resp =  await API.GET({URL: '', headers: {}})
 return resp
}