import type { SearchParams } from 'nuqs/server'

import {
  Categories,
  Filters,
  Hero,
  PopularRecipes,
  Recipes
} from '@/components/blocks'

import { searchParamsCache } from '@/utils/functions/searchParamsCache'

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  searchParamsCache.parse(searchParams)

  return (
    <>
      <Hero />
      <div className='gap-8 tablet:flex desktop:gap-16'>
        <div>
          <Categories />
          <PopularRecipes />
        </div>
        <div>
          <Filters />
          <Recipes />
        </div>
      </div>
    </>
  )
}
