import { alovaInstance } from 'api'
import { API_ENDPOINTS } from 'config/api-endpoints'

export type Area = {
  _id: string
  name: string
}

export const getAreas = () => alovaInstance.Get<Area[]>(API_ENDPOINTS.areas)
