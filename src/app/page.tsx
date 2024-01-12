import { Hero } from 'components/blocks/Hero'
import { Categories } from 'components/blocks/categories/Categories'
import { PopularRecipes } from 'components/blocks/popular-recipes/PopularRecipes'
import { RecipeModal } from 'components/ui/RecipeModal'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { parseAsInteger } from 'nuqs/parsers'

// type SearchParamProps = {
//   searchParams: Record<string, string> | null | undefined
// }

const counterParser = parseAsInteger.withDefault(1)

export default function Home({ searchParams }: Params) {
  console.log(searchParams)
  return (
    <>
      <Hero />
      <Categories />
      <PopularRecipes />
      {searchParams.id && <RecipeModal />}
    </>
  )
}
