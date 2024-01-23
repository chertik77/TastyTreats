import { Hero } from 'components/blocks/Hero'
import { Categories } from 'components/blocks/categories/Categories'
import { Filters } from 'components/blocks/filters/Filters'
import { PopularRecipes } from 'components/blocks/popular-recipes/PopularRecipes'
import { Recipes } from 'components/blocks/recipes/Recipes'
import { createSearchParamsCache, parseAsString } from 'nuqs/parsers'

export const searchParamsCache = createSearchParamsCache({
  category: parseAsString.withDefault(''),
  query: parseAsString.withDefault('')
})

export default function Home({ searchParams }) {
  return (
    <>
      <Hero />
      <div className='gap-8 tablet:flex desktop:gap-16'>
        <div>
          <Categories />
          <PopularRecipes />
        </div>
        <Filters />
        <Recipes />
      </div>
      <div>{searchParams.category}</div>
    </>
  )
}
