import { alovaInstance } from 'api'
import { addOrderEndpoint } from 'constants/endpoints'
import { Data } from 'utils/schema'

export const addOrder = (data: Data) => alovaInstance.Post(addOrderEndpoint, data)
