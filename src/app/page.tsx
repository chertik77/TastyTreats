import { Hero } from 'components/blocks/Hero'
import { Categories } from 'components/blocks/categories/Categories'
import { PopularRecipes } from 'components/blocks/popular-recipes/PopularRecipes'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularRecipes />
    </>
  )
}
