import type { SearchParams } from 'nuqs/server'

import { Categories } from '@/components/blocks/categories/Categories'
import { Filters } from '@/components/blocks/filters/Filters'
import { Hero } from '@/components/blocks/hero/Hero'
import { PopularRecipes } from '@/components/blocks/popular-recipes/PopularRecipes'
import { Recipes } from '@/components/blocks/recipes/Recipes'

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
