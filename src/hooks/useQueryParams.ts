import type { QueryKeys } from '@/types/query.types'

import { usePathname, useRouter } from 'next/navigation'
import { useQueryState } from 'nuqs'

export const useQueryParams = (key?: QueryKeys) => {
  const [params, setParams] = useQueryState(key as string, { shallow: false })
  const router = useRouter()
  const pathname = usePathname()

  const clearSearchParams = () => router.replace(pathname, { scroll: false })

  return { params, setParams, clearSearchParams }
}
