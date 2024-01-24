import { getCategories } from 'api/methods/getCategories'
import { CategoriesList } from './CategoriesList'

export const Categories = async () => {
  const categories = await getCategories()

  return (
    <section className='mb-10 tablet:mb-16'>
      <CategoriesList categories={categories} />
    </section>
  )
}
