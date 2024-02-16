class Endpoints {
  addOrder = '/orders/add'

  recipes = '/recipes'
  addRecipeRating = (id: string) => `${this.recipes}/${id}/rating`
  areas = '/areas'
  categories = '/categories'
  ingredients = '/ingredients'
  popularRecipes = `${this.recipes}/popular`
  recipeById = (id: string) => `${this.recipes}/${id}`
}

export const API_ENDPOINTS = new Endpoints()
