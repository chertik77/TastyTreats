import { RECIPE_SERVICE } from '@/services/recipes.service'

import { PopularRecipesList } from './PopularRecipesList'

export const PopularRecipes = async () => {
  const popularRecipes = await RECIPE_SERVICE.getPopularRecipes()

  return (
    <section className='mb-10 tablet:mb-0 tablet:w-[176px] desktop:w-[235px]'>
      <h2
        className='mb-5 text-fs-18-lh-133-fw-600 uppercase tablet:mb-8
          desktop:text-fs-24-lh-116-fw-600'>
        Popular Recipes
      </h2>
      <PopularRecipesList popularRecipes={popularRecipes} />
    </section>
  )
}
