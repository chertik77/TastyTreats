import { alovaInstance } from 'api'
import { API_ENDPOINTS } from 'config/api-endpoints'
import type { Category } from '../methods-types'

export const getCategories = () => alovaInstance.Get<Category[]>(API_ENDPOINTS.categories)
