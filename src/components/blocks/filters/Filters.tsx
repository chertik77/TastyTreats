import { RECIPE_SERVICE } from 'services/recipes.service'
import { AreaSelect } from './AreaSelect'
import { IngredientSelect } from './IngredientSelect'
import { SearchFilter } from './SearchFilter'

export const Filters = async () => {
  const areas = await RECIPE_SERVICE.getAreas()
  const ingredients = await RECIPE_SERVICE.getIngredients()

  return (
    <>
      <SearchFilter />
      <AreaSelect areas={areas} />
      <IngredientSelect ingredients={ingredients} />
    </>
  )
}
