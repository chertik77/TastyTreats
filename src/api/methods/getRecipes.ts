import { alovaInstance } from 'api'
import { API_ENDPOINTS } from 'config/api-endpoints'

type Recipe = {
  results: {
    _id: string
    title: string
    description: string
    preview: string
    rating: number & { min: 1; max: 5 }
  }[]
}

type Params = {
  limit?: number
  time?: number
  category?: string
  area?: string
  ingredient?: string
  page?: number
}

export const getRecipes = (params: Params) =>
  alovaInstance.Get<Recipe>(API_ENDPOINTS.recipes, { params: params })
