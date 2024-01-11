import { alovaInstance } from 'api'
import { getCategoriesEndpoint } from 'constants/endpoints'
import type { Category } from '../methods-types'

export const getCategories = () => alovaInstance.Get<Category[]>(getCategoriesEndpoint)
