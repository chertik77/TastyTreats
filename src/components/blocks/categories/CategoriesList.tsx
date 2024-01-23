'use client'

import { Category } from 'api/methods-types'
import { useQueryState } from 'nuqs'

export const CategoriesList = ({ categories }: { categories: Category[] }) => {
  const [category, setCategory] = useQueryState('category', { shallow: false })

  return (
    <ul className='h-[198px] overflow-y-scroll tablet:h-[416px] tablet:w-[176px] desktop:w-[235px]'>
      {categories?.map(({ _id, name }) => (
        <li
          key={_id}
          className='mb-[18px] cursor-pointer text-fs-14-lh-normal-fw-500 text-dark-30 last-of-type:mb-0 hocus:text-brand dark:text-gray-30 tablet:mb-6 tablet:text-fs-16-lh-125-fw-500'>
          <button
            type='button'
            className={`main-transition hover:text-brand ${category === name && 'text-brand'}`}
            onClick={() => setCategory(name)}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  )
}
