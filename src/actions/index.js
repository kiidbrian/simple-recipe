import {
  REQUEST_RECIPES,
  CLEAR_RECIPES,
  REQUEST_RECIPE_DETAILS,
  FAVORITE_RECIPE,
  UNFAVORITE_RECIPE,
  RATE_RECIPE,
} from './constants';

// REDUX ACTIONS
export function addRecipesList(payload) {
  return { type: REQUEST_RECIPES, payload };
}

export function clearRecipesList() {
  return { type: CLEAR_RECIPES };
}

export function getRecipeDetail(data, recipeId) {
  const payload = {
    data,
    recipeId,
  };
  return { type: REQUEST_RECIPE_DETAILS, payload };
}

export function favoriteRecipe(recipeId) {
  const payload = {
    recipeId,
  };
  return { type: FAVORITE_RECIPE, payload };
}

export function unFavoriteRecipe(recipeId) {
  const payload = {
    recipeId,
  };
  return { type: UNFAVORITE_RECIPE, payload };
}

export function rateRecipe(recipeId, value) {
  const payload = {
    recipeId,
    value,
  };
  return { type: RATE_RECIPE, payload };
}

// END REDUX ACTION CREATORS
