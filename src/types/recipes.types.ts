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
  results: {
    _id: string
    description: string
    preview: string
    title: string
    rating: number
  }[]
}

export type Recipe = {
  _id: string
  title: string
  thumb: string
  instructions: string
  youtube: string
  tags: string[]
  ingredients: {
    _id: string
    name: string
    measure: string
  }
  rating: number
}

export type Options = {
  area?: string
  category?: string
  ingredient?: string
  limit?: number
  page?: number
  time?: number
}