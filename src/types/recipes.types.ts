export type Categories = {
  _id: string
  name: string
}[]

export type Ingredients = {
  _id: string
  name: string
}[]

export type Areas = {
  _id: string
  name: string
}[]

export type PopularRecipes = {
  _id: string
  description: string
  preview: string
  title: string
}[]

export type Recipes = {
  totalPages: number
  perPage: number
  results: {
    _id: string
    description: string
    preview: string
    title: string
    rating: number
    tags: string[]
  }[]
}

export type Recipe = {
  _id: string
  title: string
  thumb: string
  time: string
  instructions: string
  description: string
  youtube: string
  tags: string[]
  ingredients: {
    _id: string
    name: string
    measure: string
  }[]
  rating: number
}

export type Options = {
  area?: string
  category?: string
  ingredient?: string
  limit?: number
  page?: number
  time?: string
}

export type States = {
  states: {
    time: string
    category: string
    area: string
    ingredient: string
  }
}
