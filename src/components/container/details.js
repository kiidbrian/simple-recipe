import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeDetailsPresentation from '../presentation/details';
import { addRecipesList, getRecipeDetail } from '../../actions';
import { RecipeApi } from '../../services/recipe';

class RecipeDetailsContainer extends Component {
  render() {
    return (
      <div>
        <RecipeDetailsPresentation
          renderer={this.props.renderer}
          recipeId={this.props.match.params.id}
        />
      </div>
    );
  }

  componentDidMount(prevProps) {
    if (this.props.recipes.length === 0) {
      RecipeApi.getRecipes().then(response => {
        const payload = {
          recipes: response,
        };
        this.props.addRecipesList(payload);
      });
    }
  }
}

export default connect(
  ({ recipes: { recipes } }) => ({
    recipes,
  }),
  { addRecipesList, getRecipeDetail }
)(RecipeDetailsContainer);
