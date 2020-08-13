import api from './api-helper';

export const readAllRecipes = async (id) => {
  const resp = await api.get(`/users/${id}/recipes`);
  return resp.data;
}

export const readOneRecipe = async (id) => {
  const resp = await api.get(`/recipes/${id}`);
  return resp.data;
}

export const postRecipe = async (id, recipeData) => {
  const resp = await api.post(`/users/${id}/recipes`, { recipe: recipeData });
  return resp.data;
}

export const putRecipe = async (id, recipeData) => {
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