import { getRecipes } from 'api/methods/getRecipes'
import { searchParamsCache } from 'utils/helpers/searchParamsCache'
import { RecipesList } from './RecipesList'

export const Recipes = async () => {
  const category = searchParamsCache.get('category')
  const area = searchParamsCache.get('area')
  const ingredient = searchParamsCache.get('ingredient')
  const recipes = await getRecipes({ limit: 9, category, area, ingredient })

  return (
    <>
      <RecipesList recipes={recipes} />
    </>
  )
}
