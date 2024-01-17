import { getRecipes } from 'api/methods/getRecipes'
import { RecipesList } from './RecipesList'

export const Recipes = async () => {
  const recipes = await getRecipes()

  return <RecipesList recipes={recipes} />
}
