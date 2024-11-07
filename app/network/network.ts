import axios from "axios";
import { INetworkRequest, IRequestType } from "../types/network";

const TIMEOUT = 15000


const AxiosInstance = axios.create({
  baseURL: 'https://api.snookerslam.com/api/v1/',
  responseType: 'json',
});


const defaultConfig = {
  ...axios.defaults.headers,
  timeout: TIMEOUT,
}


export const API: IRequestType = {
  GET: async ({ params, URL, headers }: INetworkRequest) => {
    return await AxiosInstance.get(URL, {
      ...defaultConfig,
      headers: headers,
      params,

    })
  },

  POST: async ({ headers, data, URL, ...rest }) => {
    return await AxiosInstance.post(URL, data, {
      ...defaultConfig,
      headers: headers,
      ...rest,
    })
  },

  PUT: async ({ data, URL, headers, params }) => {
    return await AxiosInstance.put(URL, data, {
      ...defaultConfig,
      headers: headers,
      params: params || {},
    })
  },

  DELETE: async ({ headers, params, URL }) => {
    return await AxiosInstance.delete(URL, {
      // ...defaultConfig,
      ...headers,
      params,
    })
  },

  PATCH: async ({ headers, data, URL, ...rest }) => {
    return await AxiosInstance.patch(URL, data, {
      ...defaultConfig,
      headers: headers,
      ...rest,
    })
  },
}