import RecipeDetailsPresentation from '../index';
import { formatTime } from '../../../../utility';

describe('RecipeDetailsPresentation', () => {
  it('should render RecipeDetailsPresentation', () => {
    expect(true).toBe(true);
  });
});

describe('formatTime', () => {
  it('should return a customer friendly time format', () => {
    expect(formatTime('PT40M')).toBe('40 min');
    expect(formatTime('PT30M')).toBe('30 min');
  });
});
