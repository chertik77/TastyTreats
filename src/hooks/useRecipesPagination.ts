'use client'

import type { RecipesStatesProps } from '@/types'

import { usePagination } from '@alova/scene-react'
import { useMediaQuery } from 'react-responsive'

import { RECIPE_SERVICE } from '@/services'

export const useRecipesPagination = ({
  category,
  area,
  ingredient,
  time
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
      RECIPE_SERVICE.getRecipes({
        page,
        category,
        ingredient,
        area,
        limit,
        time
      }),
    {
      total: r => r.totalPages * r.perPage,
      data: r => r.results,
      watchingStates: [category, area, ingredient, time],
      initialPageSize: isDesktop ? 9 : isTablet ? 8 : 6
    }
  )

  return { total, data, setPage, page, pageSize, loading }
}
