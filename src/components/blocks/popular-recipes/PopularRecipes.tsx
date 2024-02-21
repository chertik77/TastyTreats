import { PopularRecipesList } from './PopularRecipesList'
import { RECIPE_SERVICE } from '@/services/recipes.service'

export const PopularRecipes = async () => {
  const popularRecipes = await RECIPE_SERVICE.getPopularRecipes()

  return (
    <section className='mb-10 desktop:w-[235px] tablet:mb-0 tablet:w-[176px]'>
      <h2
        className='mb-5 text-fs-18-lh-133-fw-600 uppercase desktop:text-fs-24-lh-116-fw-600
          tablet:mb-8'>
        Popular Recipes
      </h2>
      <PopularRecipesList popularRecipes={popularRecipes} />
    </section>
  )
}
