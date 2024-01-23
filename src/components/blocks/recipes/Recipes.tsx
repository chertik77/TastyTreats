import { getRecipes } from 'api/methods/getRecipes'
import { searchParamsCache } from 'app/page'
import { RecipesList } from './RecipesList'

export const Recipes = async () => {
  const category = searchParamsCache.get('category')
  const area = searchParamsCache.get('area')
  const recipes = await getRecipes({ limit: 9, category, area })

  return (
    <>
      <div>{category}</div>
      <RecipesList recipes={recipes} />
    </>
  )
}
