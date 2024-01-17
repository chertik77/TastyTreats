import { Hero } from 'components/blocks/Hero'
import { Categories } from 'components/blocks/categories/Categories'
import { PopularRecipes } from 'components/blocks/popular-recipes/PopularRecipes'
import { Recipes } from 'components/blocks/recipes/Recipes'

export default function Home() {
  return (
    <>
      <Hero />
      <div className='gap-8 tablet:flex'>
        <div>
          <Categories />
          <PopularRecipes />
        </div>
        <Recipes />
      </div>
    </>
  )
}
