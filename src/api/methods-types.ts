export type Category = {
  _id: string
  name: string
}

export type PopularRecipe = {
  _id: string
  description: string
  preview: string
  title: string
}

export type Recipe = {
  results: {
    _id: string
    description: string
    preview: string
    rating: number & { max: 5; min: 1 }
    title: string
  }[]
}
