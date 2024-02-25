import { RECIPE_SERVICE } from '@/services'

import { AreaSelect } from './AreaSelect'
import { IngredientSelect } from './IngredientSelect'
import { ResetFilter } from './ResetFilter'
import { SearchFilter } from './SearchFilter'
import { TimeSelect } from './TimeSelect'

export const Filters = async () => {
  const areas = await RECIPE_SERVICE.getAreas()
  const ingredients = await RECIPE_SERVICE.getIngredients()

  return (
    <div className='mb-5 flex flex-wrap items-start gap-[14px] tablet:gap-4'>
      <SearchFilter />
      <TimeSelect />
      <AreaSelect areas={areas} />
      <IngredientSelect ingredients={ingredients} />
      <ResetFilter />
    </div>
  )
}
