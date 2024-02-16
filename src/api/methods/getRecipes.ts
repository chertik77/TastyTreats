import { alovaInstance } from 'api'
import { API_ENDPOINTS } from 'config/api-endpoints'

type Recipe = {
  results: {
    _id: string
    description: string
    preview: string
    rating: number & { max: 5; min: 1 }
    title: string
  }[]
}

type Params = {
  area?: string
  category?: string
  ingredient?: string
  limit?: number
  page?: number
  time?: number
}

export const getRecipes = (params: Params) =>
  alovaInstance.Get<Recipe>(API_ENDPOINTS.recipes, { params: params })
