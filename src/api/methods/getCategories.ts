import { alovaInstance } from 'api'

export type Category = {
  _id: string
  name: string
}

export const getCategories = () => alovaInstance.Get<Category[]>('/categories')
