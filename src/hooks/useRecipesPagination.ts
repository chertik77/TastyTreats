'use client'

import type { RecipesStatesProps } from '@/types/recipes.types'

import { usePagination } from '@alova/scene-react'
import { useMediaQuery } from 'react-responsive'

import { RECIPE_SERVICE } from '@/services/recipes.service'

export const useRecipesPagination = ({
  category,
  area,
  ingredient
}: RecipesStatesProps['states']) => {
  const isTablet = useMediaQuery({ minWidth: 768 })
  const isDesktop = useMediaQuery({ minWidth: 1080 })

  const {
    total,
    data,
    loading,
    page: [page, setPage],
    pageSize: [pageSize]
  } = usePagination(
    (page, limit) =>
      RECIPE_SERVICE.getRecipes({ page, category, ingredient, area, limit }),
    {
      total: r => r.totalPages * r.perPage,
      data: r => r.results,
      watchingStates: [category, area, ingredient],
      initialPageSize: isDesktop ? 9 : isTablet ? 8 : 6
    }
  )

  return { total, data, setPage, page, pageSize, loading }
}
