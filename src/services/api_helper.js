import axios from 'axios';
import { register } from '../serviceWorker';
import { Profiler } from 'react';
const api = axios.create({ baseURL: "http://localhost:3000" });

export const registerUser = async (registerData) => {
    const userData = await api.post('/auth/register', registerData);
    console.log(userData);
    localStorage.setItem('authToken', userData.data.token);
    api.defaults.headers.common.authorization = `Bearer ${userData.data.token}`;
    return userData.data.user;
  }

export const loginUser = async (loginData) => {
  console.log(loginData);
    const userData = await api.post('/auth/login', loginData);
    console.log(userData);
    localStorage.setItem('authToken', userData.data.token);
    api.defaults.headers.common.authorization = `Bearer ${userData.data.token}`;
    return userData.data.user;
  } 

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const userData = await api.get('/verify');
      return userData.data;
    } else {
      return false;
    }

}
 
export const GetUserProfile = async () => {
    const userData = await api.get('/profile');
    console.log(userData);
    return userData.data;
}

export const updateProfile = async (userId, profile) => {
  console.log(profile);
  const updateProfile = await api.put(`/user/${userId}`, profile);
  console.log(updateProfile);
  return updateProfile.data;
}

export const createRecipe  = async (recipeData, userId) => {
  console.log(recipeData);
  const Recipe = await api.post(`/recipes/${userId}`, recipeData);
  console.log(Recipe);
  return Recipe.data;
}

export const getAllRecipes = async () => {
  const allRecipes = await api.get('/recipes/all');
  console.log(allRecipes);
  return allRecipes.data;
}

export const getAllRecipesbyUser = async (userId) => {
  const allUserRecipes = await api.get(`/recipes/user/${userId}`);
  console.log(allUserRecipes);
  return allUserRecipes.data;
}

export const destroyRecipe = async (id) => {
  const deleteRecipe = await api.delete(`/recipes/${id}`);
  return deleteRecipe.data;
}

export const updateRecipe = async (recipes, id) => {
  const updateRecipe = await api.put(`/recipes/${id}`, recipes);
  return updateRecipe.data;
}

export const getRecipebyId = async(recipeId) =>{
  const getAllRecipes = await api.get(`/recipes/${recipeId}`);
  console.log(getAllRecipes);
  return getAllRecipes.data;

}






