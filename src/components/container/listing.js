import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipesListPresentation from '../presentation/listing';
import { RecipeApi } from '../../services/recipe';
import { addRecipesList } from '../../actions';

class RecipesListContainer extends Component {
  render() {
    const { renderer } = this.props;

    return (
      <div>
        <RecipesListPresentation renderer={renderer} />
      </div>
    );
  }

  componentDidMount(prevProps) {
    if (this.props.recipes.recipes.length === 0) {
      RecipeApi.getRecipes().then(response =>
        this.props.addRecipesList({ recipes: response })
      );
    }
  }
}

export default connect(
  state => ({ recipes: state.recipes }),
  { addRecipesList }
)(RecipesListContainer);
