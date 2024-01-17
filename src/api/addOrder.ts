import { alovaInstance } from 'api'
import { API_ENDPOINTS } from 'config/api-endpoints'
import { Data } from 'utils/schema'

export const addOrder = (data: Data) => alovaInstance.Post(API_ENDPOINTS.addOrder, data)
