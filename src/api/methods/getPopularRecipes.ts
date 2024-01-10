import { alovaInstance } from 'api'

export type PopularRecipe = {
  _id: string
  title: string
  description: string
  preview: string
}

export const getPopularRecipes = () => alovaInstance.Get<PopularRecipe[]>('/recipes/popular')
