import { createSearchParamsCache, parseAsString } from 'nuqs/parsers'

export const searchParamsCache = createSearchParamsCache({
  query: parseAsString.withDefault(''),
  area: parseAsString.withDefault(''),
  category: parseAsString.withDefault('')
})
