import api from './api-helper';

export const readAllFoods = async (id) => {
  const resp = await api.get(`/users/${id}/recipes/${id}/foods`);
  return resp.data;
}

export const readOneRecipe = async (id) => {
  const resp = await api.get(`/recipes/${id}`);
  return resp.data;
}

export const postFood = async (id, name, quantity) => {
  const resp = await api.post(`/users/${id}/recipes/${id}/foods`, { food: name, quantity});
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