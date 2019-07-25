import recipesState from '../recipes';
import {
  REQUEST_RECIPES,
  FAVORITE_RECIPE,
  UNFAVORITE_RECIPE,
} from '../../actions/constants';

describe('recipesState', () => {
  it('returns the initial state', () => {
    expect(recipesState(undefined, {})).toEqual({
      recipes: [],
    });
  });
  it('should handle REQUEST_RECIPES', () => {
    expect(
      recipesState([], {
        type: REQUEST_RECIPES,
        payload: { recipes: [] },
      })
    ).toEqual({ recipes: [] });
  });
});
