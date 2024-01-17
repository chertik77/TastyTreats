import { alovaInstance } from 'api'

type Recipe = {
  results: {
    _id: string
    title: string
    description: string
    preview: string
    rating: number & { min: 1; max: 5 }
  }[]
}

export const getRecipes = () => alovaInstance.Get<Recipe>('/recipes', { params: { limit: 9 } })
