import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import ReactHook from 'alova/react'

export const alovaInstance = createAlova({
  baseURL: process.env.API_BASE_URL,
  cacheLogger: false,
  requestAdapter: GlobalFetch(),
  responded: {
    onSuccess: async r => {
      if (r.status >= 400) {
        throw new Error(r.statusText)
      }
      const json = await r.json()
      return json
    }
  },
  statesHook: ReactHook
})
