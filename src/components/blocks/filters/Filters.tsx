'use client'

import { useRequest } from 'alova'
import { alovaInstance } from 'api'
import { getAreas } from 'api/methods/getAreas'
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete'
import { Dropdown } from 'primereact/dropdown'
import { useState } from 'react'

type Recipe = {
  results: {
    _id: string
    title: string
    description: string
    preview: string
    rating: number & { min: 1; max: 5 }
  }[]
}

export const Filters = () => {
  const { data } = useRequest(alovaInstance.Get<Recipe>('/recipes', { params: { limit: 500 } }))
  const { data: areaData } = useRequest(getAreas)
  const [value, setValue] = useState('')
  const [items, setItems] = useState<string[]>([])
  const [selectedCity, setSelectedCity] = useState('Unknown')
  const search = (event: AutoCompleteCompleteEvent) => {
    const recipesTitle = data?.results.map(result => result.title)
    const filteredItems = recipesTitle.filter(recipe =>
      recipe.toLowerCase().includes(event.query.toLowerCase())
    )
    setItems(filteredItems)
  }

  return (
    <>
      <label className='mb-2 text-fs-12-lh-normal-fw-400 text-dark-50 dark:text-gray-50'>
        Search
        <span className='p-input-icon-left'>
          <i className='pi pi-search left-[18px] z-[1] text-dark-50' />
          <AutoComplete
            className='text-fs-14-lh-normal-fw-500'
            value={value}
            pt={{
              item: {
                className: 'whitespace-normal text-fs-14-lh-normal-fw-500 text-dark-50 dark:text-gray-30'
              }
            }}
            inputClassName='w-[335px] h-[46px] border border-dark-20 rounded-[15px] py-[14px] pl-[48px] placeholder:text-dark-50 placeholder:fs-14-lh-normal-fw-500 focus:outline-none focus:shadow-none text-dark-50'
            panelClassName='w-5 rounded-[14px] dark:bg-dark'
            onChange={e => setValue(e.value)}
            completeMethod={search}
            suggestions={items}
            placeholder='Enter text'
            showEmptyMessage
            emptyMessage='No recipes found'
          />
        </span>
      </label>
      <label className='mb-2 text-fs-12-lh-normal-fw-400 text-dark-50'>
        Area
        <Dropdown
          value={selectedCity}
          pt={{
            root: { className: 'shadow-none rounded-[15px] border border-dark-20 w-[161px] h-[46px]' },
            filterInput: { className: 'focus:shadow-none pl-2 pr-10 border border-dark-20' },
            panel: { className: 'w-5' },
            wrapper: { className: 'overscroll-none' }
          }}
          onChange={e => setSelectedCity(e.value)}
          filter
          dropdownIcon={
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
              <path
                d='M4.5 6.75L9 11.25L13.5 6.75'
                stroke='#050505'
                strokeOpacity='0.5'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          }
          showOnFocus
          options={areaData?.map(area => area.name)}
        />
      </label>
    </>
  )
}
