import { alovaInstance } from '@/api'
import { API_ENDPOINTS } from '@/config/api-endpoints.config'
import type {
  Areas,
  Categories,
  Ingredients,
  Options,
  PopularRecipes,
  Recipe,
  Recipes
} from '@/types/recipes.types'
import type { Data } from '@/utils/schema'

class SERVICE {
  getRecipes(options: Options) {
    return alovaInstance.Get<Recipes>(API_ENDPOINTS.RECIPES, {
      params: options
    })
  }

  getPopularRecipes() {
    return alovaInstance.Get<PopularRecipes>(API_ENDPOINTS.POPULAR_RECIPES)
  }

  getIngredients() {
    return alovaInstance.Get<Ingredients>(API_ENDPOINTS.INGREDIENS)
  }

  getCategories() {
    return alovaInstance.Get<Categories>(API_ENDPOINTS.CATEGORIES)
  }

  getRecipeById(id: string) {
    return alovaInstance.Get<Recipe>(`${API_ENDPOINTS.RECIPES}/${id}`)
  }

  getAreas() {
    return alovaInstance.Get<Areas>(API_ENDPOINTS.AREAS)
  }

  addOrder(data: Data) {
    return alovaInstance.Post(API_ENDPOINTS.ADD_ORDER, data)
  }
}

export const RECIPE_SERVICE = new SERVICE()
