'use client'

import { Category } from 'api/methods-types'
import { useQueryState } from 'nuqs'
import { useState } from 'react'

export const CategoriesList = ({ categories }: { categories: Category[] }) => {
  const [_, setName] = useQueryState('category')
  const [activeButton, setActiveButton] = useState<string | null>(null)

  const handleButtonClick = (id: string) => {
    setActiveButton(id)
  }

  return (
    <ul className='h-[198px] overflow-y-scroll tablet:h-[416px] tablet:w-[176px] desktop:w-[235px]'>
      {categories?.map(({ _id, name }) => (
        <li
          key={_id}
          className='mb-[18px] cursor-pointer text-fs-14-lh-normal-fw-500 text-dark-30 last-of-type:mb-0 hocus:text-brand dark:text-gray-30 tablet:mb-6 tablet:text-fs-16-lh-125-fw-500'>
          <button
            type='button'
            className={`main-transition hover:text-brand ${activeButton === _id && 'text-brand'}`}
            onClick={() => {
              handleButtonClick(_id)
              setName(name)
            }}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  )
}
