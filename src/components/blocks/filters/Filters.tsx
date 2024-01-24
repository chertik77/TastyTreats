import { getAreas } from 'api/methods/getAreas'
import { getRecipes } from 'api/methods/getRecipes'
import { AreaSelect } from './AreaSelect'
import { SearchFilter } from './SearchFilter'
import { getIngredients } from 'api/methods/getIngredients'
import { IngredientSelect } from './IngredientSelect'

export const Filters = async () => {
  const areas = await getAreas()
  const ingredients = await getIngredients()
  const recipesTitles = await getRecipes({ limit: 500 })

  return (
    <>
      <SearchFilter recipesTitles={recipesTitles} />
      <AreaSelect areas={areas} />
      <IngredientSelect ingredients={ingredients} />
    </>
  )
}
