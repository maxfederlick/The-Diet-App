import api from './api-helper';

export const readAllFoods = async (id) => {
  const resp = await api.get(`/users/${id}/recipes/${id}/foods`);
  return resp.data;
}

export const readOneRecipe = async (id) => {
  const resp = await api.get(`/recipes/${id}`);
  return resp.data;
}

export const postFood = async (id, recipe_id, foodData) => {
  const resp = await api.post(`/users/${id}/recipes/${recipe_id}/foods`, { food: foodData });
  return resp.data;
}

export const putFood = async (id, recipeData) => {
  const resp = await api.put(`/recipes/${id}`, { recipe: recipeData });
  return resp.data;
}

export const destroyRecipe = async (id) => {
  const resp = await api.delete(`/recipes/${id}`);
  return resp;
}

export const addFood = async(foodId, recipeId) => {
  const resp = await api.put(`/foods/${foodId}/recipes/${recipeId}`);
  return resp.data;
}