import {
  addRecipesList,
  favoriteRecipe,
  unFavoriteRecipe,
  rateRecipe,
} from '../index';
import {
  REQUEST_RECIPES,
  FAVORITE_RECIPE,
  UNFAVORITE_RECIPE,
  RATE_RECIPE,
} from '../constants';

describe('Recipe Actions', () => {
  describe('addRecipesList', () => {
    it('should return the correct constant', () => {
      const payload = {};
      const expectedAction = {
        type: REQUEST_RECIPES,
        payload,
      };
      expect(addRecipesList(payload)).toEqual(expectedAction);
    });
  });
  describe('favoriteRecipe', () => {
    it('should return the correct constant', () => {
      const recipeId = 'some-unique-id';
      const expectedAction = {
        type: FAVORITE_RECIPE,
        payload: { recipeId },
      };
      expect(favoriteRecipe(recipeId)).toEqual(expectedAction);
    });
  });
  describe('unFavoriteRecipe', () => {
    it('should return the correct constant', () => {
      const recipeId = 'some-unique-id';
      const expectedAction = {
        type: UNFAVORITE_RECIPE,
        payload: { recipeId },
      };
      expect(unFavoriteRecipe(recipeId)).toEqual(expectedAction);
    });
  });
  describe('rateRecipe', () => {
    it('should return the correct constant', () => {
      const recipeId = 'some-unique-id';
      const value = 4;
      const expectedAction = {
        type: RATE_RECIPE,
        payload: { recipeId, value },
      };
      expect(rateRecipe(recipeId, value)).toEqual(expectedAction);
    });
  });
});
