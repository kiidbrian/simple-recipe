import { ApiService } from './api';
import { BASE_URL } from '../actions/constants';

class RecipeApiService extends ApiService {
  constructor() {
    super(BASE_URL);
    console.info('Recipe Api service has been created!');
  }

  getRecipes() {
    return this.http.get('frontend-dev-test/recipes.json');
  }
}

export const RecipeApi = new RecipeApiService();
