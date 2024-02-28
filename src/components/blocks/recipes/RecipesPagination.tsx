import type { Dispatch, SetStateAction } from 'react'

import { Paginator } from 'primereact/paginator'
import { useMediaQuery } from 'react-responsive'

type RecipesPaginationProps = {
  total: number
  pageSize: number
  setPage: Dispatch<SetStateAction<number>>
  page: number
}
export const RecipesPagination = ({
  total,
  pageSize,
  setPage,
  page
}: RecipesPaginationProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <Paginator
      first={total === 0 ? 0 : (page - 1) * pageSize}
      rows={pageSize}
      alwaysShow={false}
      totalRecords={total}
      pageLinkSize={isMobile ? 2 : 3}
      onPageChange={e => setPage(e.page + 1)}
    />
  )
}
