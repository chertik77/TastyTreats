'use client'

import { useQueryState } from 'nuqs'
import type { Categories } from 'types/recipes.types'

export const CategoriesList = ({ categories }: { categories: Categories }) => {
  const [category, setCategory] = useQueryState('category', { shallow: false })

  return (
    <>
      <button
        className='btn-categories mb-[38px] desktop:mb-[42px] tablet:mb-[30px]'
        onClick={() => setCategory(null)}
        type='reset'>
        All categories
      </button>
      <ul className='h-[198px] overflow-y-scroll desktop:w-[235px] tablet:h-[416px] tablet:w-[176px]'>
        {categories?.map(({ _id, name }) => (
          <li
            className='mb-[18px] cursor-pointer text-fs-14-lh-normal-fw-500 text-dark-30
              last-of-type:mb-0 hocus:text-brand dark:text-gray-30 tablet:mb-6
              tablet:text-fs-16-lh-125-fw-500'
            key={_id}>
            <button
              className={`main-transition hover:text-brand ${
                category === name && 'text-brand'
              }`}
              onClick={() => setCategory(name)}
              type='button'>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
