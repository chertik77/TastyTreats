'use client'

import type { Areas } from '@/types/recipes.types'

import { useQueryState } from 'nuqs'
import { Dropdown } from 'primereact/dropdown'

export const AreaSelect = ({ areas }: { areas: Areas }) => {
  const [area, setArea] = useQueryState('area', { shallow: false })

  return (
    <label className='mb-2 text-fs-12-lh-normal-fw-400 text-dark-50 dark:text-gray-50'>
      Area
      <Dropdown
        dropdownIcon={
          <svg
            fill='none'
            height='18'
            viewBox='0 0 18 18'
            width='18'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              className='dark:stroke-gray-50'
              d='M4.5 6.75L9 11.25L13.5 6.75'
              stroke='#050505'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeOpacity='0.5'
              strokeWidth='2'
            />
          </svg>
        }
        onChange={e => setArea(e.value)}
        options={areas?.map(area => area.name)}
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
        value={area}
      />
    </label>
  )
}
