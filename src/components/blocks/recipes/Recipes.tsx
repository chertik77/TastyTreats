import { RecipesList } from './RecipesList'
import { searchParamsCache } from '@/utils/helpers/searchParamsCache'

export const Recipes = async () => {
  const category = searchParamsCache.get('category')
  const area = searchParamsCache.get('area')
  const ingredient = searchParamsCache.get('ingredient')

  return (
    <>
      <RecipesList states={{ category, area, ingredient }} />
    </>
  )
}
