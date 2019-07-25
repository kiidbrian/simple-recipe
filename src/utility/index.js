import { TIME_REGEX } from '../actions/constants';
/**
 * formatTime - Formats time into a user friendly manner
 * @param {String} time
 * @returns {String}
 */
export const formatTime = time => {
  const trimmedTime = time.trim();
  // if(!TIME_REGEX.test(trimmedTime)) return "";
  const extractMinutes = trimmedTime.substring(2, 4);
  return `${extractMinutes} min`;
};

/**
 * findRecipe -
 * @param {array} recipes
 * @param {string} recipeId
 * @returns {Object}
 */
export const findRecipe = (recipes, recipeId) => {
  return recipes.find(r => r.id === recipeId);
};
