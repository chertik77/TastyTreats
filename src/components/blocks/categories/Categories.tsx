import { getCategories } from 'api/methods/getCategories'
import { CategoriesList } from './CategoriesList'

export const Categories = async () => {
  const categories = await getCategories()

  return (
    <section className='mb-10 tablet:mb-16'>
      <button className='btn-categories mb-[38px] tablet:mb-[30px] desktop:mb-[42px]' type='reset'>
        All categories
      </button>
      <CategoriesList categories={categories} />
    </section>
  )
}
