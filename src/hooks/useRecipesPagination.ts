import { usePagination } from '@alova/scene-react'
import { RECIPE_SERVICE } from 'services/recipes.service'
import type { RecipesStatesProps } from 'types/recipes.types'

export const useRecipesPagination = ({
  category,
  area,
  ingredient
}: RecipesStatesProps['states']) => {
  const {
    total,
    data,
    pageCount,
    isLastPage,
    page: [_, setPage]
  } = usePagination(
    (page, limit) =>
      RECIPE_SERVICE.getRecipes({ page, category, area, ingredient, limit }),
    {
      total: r => r.totalPages,
      data: r => r.results,
      watchingStates: [category, area, ingredient],
      initialPageSize: 9
    }
  )

  return { total, data, pageCount, isLastPage, setPage }
}
