import { alovaInstance } from 'api'
import { API_ENDPOINTS } from 'config/api-endpoints'

export type Ingredient = {
  _id: string
  name: string
}

export const getIngredients = () => alovaInstance.Get<Ingredient[]>(API_ENDPOINTS.ingredients)
