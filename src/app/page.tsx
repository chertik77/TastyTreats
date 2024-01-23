import { Hero } from 'components/blocks/Hero'
import { Categories } from 'components/blocks/categories/Categories'
import { Filters } from 'components/blocks/filters/Filters'
import { PopularRecipes } from 'components/blocks/popular-recipes/PopularRecipes'
import { Recipes } from 'components/blocks/recipes/Recipes'
import { createSearchParamsCache, parseAsString, type SearchParams } from 'nuqs/parsers'

export const searchParamsCache = createSearchParamsCache({
  query: parseAsString.withDefault(''),
  area: parseAsString.withDefault(''),
  category: parseAsString.withDefault('')
})

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
