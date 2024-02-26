'use client'

import { useQueryParams } from '@/hooks'

export const ResetFilter = () => {
  const { clearSearchParams } = useQueryParams()

  return (
    <button
      className='mb-5 ml-auto flex items-center gap-1 text-fs-12-lh-normal-fw-500 text-dark/50 dark:text-white/50 max-tablet:mt-auto'
      onClick={clearSearchParams}>
      <i
        className='pi pi-times text-brand'
        style={{ fontSize: 16 }}></i>
      Reset the filter
    </button>
  )
}
