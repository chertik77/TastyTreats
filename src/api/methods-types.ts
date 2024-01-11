export type Category = {
  _id: string
  name: string
}

export type PopularRecipe = {
  _id: string
  title: string
  description: string
  preview: string
}

export type Recipe = {
  results: {
    _id: string
    title: string
    description: string
    preview: string
    rating: number & { min: 1; max: 5 }
  }[]
}
