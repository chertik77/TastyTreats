import { alovaInstance } from 'api'
import { API_ENDPOINTS } from 'config/api-endpoints'

export type Category = {
  _id: string
  name: string
}

export const getCategories = () => alovaInstance.Get<Category[]>(API_ENDPOINTS.categories)
