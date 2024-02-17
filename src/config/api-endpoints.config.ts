class ENDPOINTS {
  private root = '/recipes'

  RECIPES = this.root
  POPULAR_RECIPES = `${this.root}/popular`
  AREAS = '/areas'
  CATEGORIES = '/categories'
  INGREDIENS = '/ingredients'
  ADD_ORDER = '/orders/add'
}

export const API_ENDPOINTS = new ENDPOINTS()
