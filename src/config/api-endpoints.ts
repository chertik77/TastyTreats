class Endpoints {
  recipes = '/recipes'

  popularRecipes = `${this.recipes}/popular`
  recipeById = (id: string) => `${this.recipes}/${id}`
  categories = '/categories'
  ingredients = '/ingredients'
  areas = '/areas'
  addOrder = '/orders/add'
  addRecipeRating = (id: string) => `${this.recipes}/${id}/rating`
}

export const API_ENDPOINTS = new Endpoints()
