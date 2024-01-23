import { getRecipes } from 'api/methods/getRecipes'
import { RecipesList } from './RecipesList'

export const Recipes = async () => {
  const recipes = await getRecipes({ limit: 9 })

  return <RecipesList recipes={recipes} />
}
