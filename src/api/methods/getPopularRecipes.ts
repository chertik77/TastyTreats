import { alovaInstance } from 'api'
import { getPopularRecipesEndpoint } from 'constants/endpoints'
import type { PopularRecipe } from '../methods-types'

export const getPopularRecipes = () => alovaInstance.Get<PopularRecipe[]>(getPopularRecipesEndpoint)
