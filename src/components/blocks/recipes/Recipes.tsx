import { searchParamsCache } from 'utils/helpers/searchParamsCache'

import { RECIPE_SERVICE } from 'services/recipes.service'
import { RecipesList } from './RecipesList'

export const Recipes = async () => {
  const category = searchParamsCache.get('category')
  const area = searchParamsCache.get('area')
  const ingredient = searchParamsCache.get('ingredient')
  const query = searchParamsCache.get('query')
  const recipes = await RECIPE_SERVICE.getRecipes({
    area,
    category,
    ingredient,
    limit: 9
  })

  return (
    <>
      <RecipesList filterQuery={query} recipes={recipes} />
    </>
  )
}
