import {
  REQUEST_RECIPES,
  CLEAR_RECIPES,
  REQUEST_RECIPE_DETAILS,
  FAVORITE_RECIPE,
  UNFAVORITE_RECIPE,
  RATE_RECIPE,
} from '../actions/constants';

const initialState = {
  recipes: [],
};

export default function recipesState(state = initialState, action) {
  switch (action.type) {
    case REQUEST_RECIPES:
      return { ...state, recipes: action.payload.recipes };

    case CLEAR_RECIPES:
      return { ...state, recipes: [] };

    case REQUEST_RECIPE_DETAILS:
      const selectedRecipe = action.payload.data.recipes.find(
        r => r.id === action.payload.recipeId
      );
      return { ...state, selectedRecipe: selectedRecipe };

    case FAVORITE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map(recipe => ({
          ...recipe,
          favorites:
            recipe.id === action.payload.recipeId
              ? recipe.favorites + 1
              : recipe.favorites,
          favorited:
            recipe.id === action.payload.recipeId
              ? (recipe.favorited = true)
              : recipe.favorited,
        })),
      };

    case UNFAVORITE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map(recipe => ({
          ...recipe,
          favorites:
            recipe.id === action.payload.recipeId
              ? recipe.favorites - 1
              : recipe.favorites,
          favorited:
            recipe.id === action.payload.recipeId
              ? (recipe.favorited = false)
              : recipe.favorited,
        })),
      };

    case RATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map(recipe => ({
          ...recipe,
          rating:
            recipe.id === action.payload.recipeId
              ? (recipe.rating = action.payload.value)
              : recipe.rating,
        })),
      };

    default:
      return state;
  }
}
