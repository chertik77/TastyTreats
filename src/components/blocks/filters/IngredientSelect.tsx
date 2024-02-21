'use client'

import { DropdownIcon } from '@/components/ui/DropdownIcon'
import type { Ingredients } from '@/types/recipes.types'
import { useQueryState } from 'nuqs'
import { Dropdown } from 'primereact/dropdown'

export const IngredientSelect = ({
  ingredients
}: {
  ingredients: Ingredients
}) => {
  const [ingredientParam, setIngredientParam] = useQueryState('ingredient', {
    shallow: false
  })
  return (
    <label className='mb-2 text-fs-12-lh-normal-fw-400 text-dark-50 dark:text-gray-50'>
      Area
      <Dropdown
        dropdownIcon={<DropdownIcon />}
        onChange={e => {
          console.log(e)
          setIngredientParam(e.value._id)
        }}
        optionLabel='name'
        optionValue=''
        options={ingredients?.map(ingredient => ingredient)}
        pt={{
          filterInput: {
            className:
              'focus:shadow-none pl-2 pr-10 border border-dark-20 dark:bg-transparent dark:border-gray-20 dark:text-gray-50'
          },
          header: { className: 'dark:bg-dark rounded-t-[14px]' },
          item: {
            className:
              'text-fs-14-lh-normal-fw-500 text-dark-30 dark:text-gray-30 hover:bg-transparent hover:text-dark dark:hover:text-white'
          },
          panel: { className: 'w-5 dark:bg-dark rounded-[14px]' },
          root: {
            className:
              'shadow-none rounded-[15px] border border-dark-20 w-[161px] h-[46px] dark:bg-transparent dark:border-gray-20 mt-2'
          },
          wrapper: { className: 'overscroll-none' }
        }}
        scrollHeight='171px'
        showOnFocus
        value={ingredients?.find(
          ingredient => ingredient._id === ingredientParam
        )}
      />
    </label>
  )
}
