'use client'

import { useQueryState } from 'nuqs'
import {
  AutoComplete,
  type AutoCompleteCompleteEvent
} from 'primereact/autocomplete'
import { useMemo, useState } from 'react'
import type { Recipes } from 'types/recipes.types'

export const SearchFilter = ({ recipesTitles }: { recipesTitles: Recipes }) => {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [query, setQuery] = useQueryState('query', { shallow: false })

  const search = useMemo(
    () => (event: AutoCompleteCompleteEvent) => {
      const recipesTitle = recipesTitles?.results?.map(result => result.title)
      const filteredItems = recipesTitle.filter(recipe =>
        recipe.toLowerCase().includes(event.query.toLowerCase().trim())
      )
      setSuggestions(filteredItems)
    },
    [recipesTitles?.results]
  )

  return (
    <label className='text-fs-12-lh-normal-fw-400 text-dark-50 dark:text-gray-50'>
      Search
      <span className='p-input-icon-left mt-2'>
        <i className='pi pi-search left-[18px] z-[1] text-dark-50 dark:text-gray-50' />
        <AutoComplete
          completeMethod={search}
          emptyMessage='No recipes found'
          inputClassName='w-[335px] h-[46px] border border-dark-20 rounded-[15px] py-[14px] px-[48px] placeholder:text-dark-50 placeholder:fs-14-lh-normal-fw-500 focus:outline-none focus:shadow-none text-dark-50 dark:bg-transparent dark:border-gray-20 dark:placeholder:text-gray-50 dark:text-gray-50'
          onChange={e => setQuery(e.value)}
          panelClassName='w-5 rounded-[14px] dark:bg-dark tablet:placeholder:fs-16-lh-125-fw-500 tablet:w-[278px]'
          placeholder='Enter text'
          pt={{
            item: {
              className:
                'whitespace-normal text-fs-14-lh-normal-fw-500 text-dark-50 dark:text-gray-30 text-balance dark:hover:text-white hover:bg-transparent hover:text-dark'
            }
          }}
          showEmptyMessage
          suggestions={suggestions}
          value={query}
        />
      </span>
    </label>
  )
}
