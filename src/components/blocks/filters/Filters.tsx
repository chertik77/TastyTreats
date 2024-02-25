import { RECIPE_SERVICE } from '@/services'

import { AreaSelect } from './AreaSelect'
import { IngredientSelect } from './IngredientSelect'
import { SearchFilter } from './SearchFilter'
import { TimeSelect } from './TimeSelect'

export const Filters = async () => {
  const areas = await RECIPE_SERVICE.getAreas()
  const ingredients = await RECIPE_SERVICE.getIngredients()

  return (
    <>
      <SearchFilter />
      <TimeSelect />
      <AreaSelect areas={areas} />
      <IngredientSelect ingredients={ingredients} />
    </>
  )
}
