import { axiosRequestAdapter } from '@alova/adapter-axios'
import { createAlova } from 'alova'
import ReactHook from 'alova/react'

export const alovaInstance = createAlova({
  statesHook: ReactHook,
  baseURL: process.env.API_BASE_URL,
  requestAdapter: axiosRequestAdapter(),
  responded: r => r.data
})
