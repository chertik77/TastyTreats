import { getAreas } from 'api/methods/getAreas'
import { getRecipes } from 'api/methods/getRecipes'
import { AreaSelect } from './AreaSelect'
import { SearchFilter } from './SearchFilter'

export const Filters = async () => {
  const areas = await getAreas()
  const recipesTitles = await getRecipes({ limit: 9 })

  return (
    <>
      <SearchFilter recipesTitles={recipesTitles} />
      <AreaSelect areas={areas} />
    </>
  )
}
