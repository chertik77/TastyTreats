import type { SearchParams } from 'nuqs/parsers'

import { Hero } from 'components/blocks/Hero'
import { Categories } from 'components/blocks/categories/Categories'
import { Filters } from 'components/blocks/filters/Filters'
import { PopularRecipes } from 'components/blocks/popular-recipes/PopularRecipes'
import { Recipes } from 'components/blocks/recipes/Recipes'
import { searchParamsCache } from 'utils/helpers/searchParamsCache'

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  searchParamsCache.parse(searchParams)
  return (
    <>
      <Hero />
      <div className='gap-8 desktop:gap-16 tablet:flex'>
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
