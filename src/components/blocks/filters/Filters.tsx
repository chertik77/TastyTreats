import { Select } from '@/components/ui/Select'

import { RECIPE_SERVICE } from '@/services'

import { searchParamsCache } from '@/utils/functions/searchParamsCache'
import time from '@/utils/json/filters-time.json'

import { ResetFilter } from './ResetFilter'
import { SearchFilter } from './SearchFilter'

export const Filters = async () => {
  const areas = await RECIPE_SERVICE.getAreas()
  const ingredients = await RECIPE_SERVICE.getIngredients()

  return (
    <div className='mb-5 flex flex-wrap items-start gap-[14px] tablet:gap-4'>
      <SearchFilter />
      <Select
        labelName='Time'
        paramsKey='time'
        selectOptions={time.map(t => t + ' min')}
        value={searchParamsCache.get('time') + ' min'}
      />
      <Select
        labelName='Area'
        paramsKey='area'
        selectOptions={areas.map(area => area.name)}
      />
      <Select
        labelName='Ingredients'
        paramsKey='ingredient'
        optionLabel='name'
        selectOptions={ingredients.map(ingredient => ingredient)}
        value={ingredients?.find(
          ingredient => ingredient._id === searchParamsCache.get('ingredient')
        )}
      />
      <ResetFilter />
    </div>
  )
}
