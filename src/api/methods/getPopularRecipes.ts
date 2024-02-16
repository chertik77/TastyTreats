import { alovaInstance } from 'api'
import { API_ENDPOINTS } from 'config/api-endpoints'

export type PopularRecipe = {
  _id: string
  description: string
  preview: string
  title: string
}

export const getPopularRecipes = () =>
  alovaInstance.Get<PopularRecipe[]>(API_ENDPOINTS.popularRecipes)
