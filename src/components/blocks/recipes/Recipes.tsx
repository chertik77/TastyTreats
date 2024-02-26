import { searchParamsCache } from '@/utils/functions/searchParamsCache'

import { RecipesList } from './RecipesList'

export const Recipes = async () => {
  const category = searchParamsCache.get('category')
  const area = searchParamsCache.get('area')
  const ingredient = searchParamsCache.get('ingredient')
  const time = searchParamsCache.get('time')

  return <RecipesList states={{ category, area, ingredient, time }} />
}
