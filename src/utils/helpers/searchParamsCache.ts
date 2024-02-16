import { createSearchParamsCache, parseAsString } from 'nuqs/parsers'

export const searchParamsCache = createSearchParamsCache({
  area: parseAsString.withDefault(''),
  category: parseAsString.withDefault(''),
  ingredient: parseAsString.withDefault(''),
  query: parseAsString.withDefault('')
})
