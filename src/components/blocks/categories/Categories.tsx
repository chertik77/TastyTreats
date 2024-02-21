import { CategoriesList } from './CategoriesList'
import { RECIPE_SERVICE } from '@/services/recipes.service'

export const Categories = async () => {
  const categories = await RECIPE_SERVICE.getCategories()

  return (
    <section className='mb-10 tablet:mb-16'>
      <CategoriesList categories={categories} />
    </section>
  )
}
