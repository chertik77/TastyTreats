'use client'

import type { Ingredient } from 'api/methods/getIngredients'
import { useQueryState } from 'nuqs'
import { Dropdown } from 'primereact/dropdown'
import { memo } from 'react'

export const IngredientSelect = memo(({ ingredients }: { ingredients: Ingredient[] }) => {
  const ingredient = ingredients.map(ingredient => ingredient)
  const [ingredientParam, setIngredientParam] = useQueryState('ingredient', { shallow: false })

  return (
    <label className='mb-2 text-fs-12-lh-normal-fw-400 text-dark-50 dark:text-gray-50'>
      Area
      <Dropdown
        value={ingredient.find(({ _id }) => _id === ingredientParam)?.name}
        pt={{
          root: {
            className:
              'shadow-none rounded-[15px] border border-dark-20 w-[161px] h-[46px] dark:bg-transparent dark:border-gray-20 mt-2'
          },
          header: { className: 'dark:bg-dark rounded-t-[14px]' },
          filterInput: {
            className:
              'focus:shadow-none pl-2 pr-10 border border-dark-20 dark:bg-transparent dark:border-gray-20 dark:text-gray-50'
          },
          panel: { className: 'w-5 dark:bg-dark rounded-[14px]' },
          wrapper: { className: 'overscroll-none' },
          item: {
            className:
              'text-fs-14-lh-normal-fw-500 text-dark-30 dark:text-gray-30 hover:bg-transparent hover:text-dark dark:hover:text-white'
          }
        }}
        onChange={e => {
          const selectedIngredient = ingredient.find(({ name }) => name === e.value)
          setIngredientParam(selectedIngredient?._id || '')
        }}
        dropdownIcon={
          <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
            <path
              d='M4.5 6.75L9 11.25L13.5 6.75'
              stroke='#050505'
              className='dark:stroke-gray-50'
              strokeOpacity='0.5'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        }
        showOnFocus
        scrollHeight='171px'
        options={ingredients?.map(ingredient => ingredient.name)}
      />
    </label>
  )
})

IngredientSelect.displayName = 'IngredientSelect'
