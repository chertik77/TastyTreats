import type { RecipesStatesProps } from '@/types/recipes.types'

import { usePagination } from '@alova/scene-react'
import { useMedia } from 'react-use-media'

import { RECIPE_SERVICE } from '@/services/recipes.service'

export const useRecipesPagination = ({
  category,
  area,
  ingredient
}: RecipesStatesProps['states']) => {
  const isTablet = useMedia({ maxWidth: 1080 })

  const {
    total,
    data,
    page: [page, setPage],
    pageSize: [pageSize]
  } = usePagination(
    (page, limit) =>
      RECIPE_SERVICE.getRecipes({ page, category, ingredient, area, limit }),
    {
      total: r => r.totalPages * r.perPage,
      data: r => r.results,
      watchingStates: [category, area, ingredient],
      initialPageSize: isTablet ? 8 : 9
    }
  )

  return { total, data, setPage, page, pageSize }
}
