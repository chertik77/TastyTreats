import { alovaInstance } from 'api'

export type Area = {
  _id: string
  name: string
}

export const getAreas = () => alovaInstance.Get<Area[]>('/areas')
