import { alovaInstance } from 'api'
import { API_ENDPOINTS } from 'config/api-endpoints'
import type { PopularRecipe } from '../methods-types'

export const getPopularRecipes = () => alovaInstance.Get<PopularRecipe[]>(API_ENDPOINTS.popularRecipes)
