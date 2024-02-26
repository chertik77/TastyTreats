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
    <>
      <div className='mb-[14px] flex flex-wrap gap-[14px] max-tablet:justify-center tablet:gap-4'>
        <SearchFilter />
        <Select
          labelName='Time'
          paramsKey='time'
          scrollHeight='124px'
          className='tablet:w-[125px]'
          selectOptions={time.map(t => t + ' min')}
          value={searchParamsCache.get('time') + ' min'}
        />
        <Select
          labelName='Area'
          paramsKey='area'
          scrollHeight='176px'
          className='tablet:w-[141px]'
          selectOptions={areas.map(area => area.name)}
        />
        <Select
          labelName='Ingredients'
          paramsKey='ingredient'
          optionLabel='name'
          className='w-[188px]'
          scrollHeight='176px'
          selectOptions={ingredients.map(ingredient => ingredient)}
          value={ingredients?.find(
            ingredient => ingredient._id === searchParamsCache.get('ingredient')
          )}
        />
      </div>
      <ResetFilter />
    </>
  )
}
