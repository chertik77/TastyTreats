import { createSearchParamsCache, parseAsString } from 'nuqs/server'

export const searchParamsCache = createSearchParamsCache({
  area: parseAsString.withDefault(''),
  category: parseAsString.withDefault(''),
  ingredient: parseAsString.withDefault(''),
  query: parseAsString.withDefault(''),
  time: parseAsString.withDefault('')
})
