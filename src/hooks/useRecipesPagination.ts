import { RECIPE_SERVICE } from '@/services/recipes.service'
import type { RecipesStatesProps } from '@/types/recipes.types'
// eslint-disable-next-line import/named
import { usePagination } from '@alova/scene-react'

export const useRecipesPagination = ({
  category,
  area,
  ingredient
}: RecipesStatesProps['states']) => {
  const {
    total,
    data,
    page: [page, setPage]
  } = usePagination(
    (page, limit) =>
      RECIPE_SERVICE.getRecipes({ page, category, ingredient, area, limit }),
    {
      total: r => r.totalPages * r.perPage,
      data: r => r.results,
      watchingStates: [category, area, ingredient],
      initialPageSize: 9
    }
  )

  return { total, data, setPage, page }
}
