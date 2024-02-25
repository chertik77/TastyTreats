'use client'

import { useQueryState } from 'nuqs'
import { Dropdown } from 'primereact/dropdown'

import { DropdownIcon } from '@/components/ui'

import time from '@/utils/json/filters-time.json'

export const TimeSelect = () => {
  const [ingredientParam, setIngredientParam] = useQueryState('time', {
    shallow: false
  })

  return (
    <label className='flex flex-col text-fs-12-lh-normal-fw-400 text-dark-50 dark:text-gray-50'>
      Time
      <Dropdown
        dropdownIcon={<DropdownIcon />}
        onChange={e => {
          const time = e.value.slice(0, -4)
          setIngredientParam(time)
        }}
        options={time.map(time => time + ' min')}
        pt={{
          input: {
            className:
              'text-black/50 text-fs-16-lh-125-fw-500 dark:text-white/50'
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
        placeholder='Any'
        scrollHeight='171px'
        showOnFocus
        value={ingredientParam + ' min'}
      />
    </label>
  )
}
