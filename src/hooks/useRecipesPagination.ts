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
    page: [page, setPage]
  } = usePagination(
    (page, limit) =>
      RECIPE_SERVICE.getRecipes({
        page,
        ...(category ? { category } : {}),
        ...(ingredient ? { ingredient } : {}),
        ...(area ? { area } : {}),
        limit
      }),
    {
      total: r => r.totalPages * 9,
      data: r => r.results,
      watchingStates: [category, area, ingredient],
      initialPageSize: 9,
      preloadNextPage: false,
      preloadPreviousPage: false
    }
  )

  return { total, data, pageCount, isLastPage, setPage, page }
}
