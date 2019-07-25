import React from 'react';
import { connect } from 'react-redux';
import Header from '../shared/header';
import Favorites from '../shared/favorite';
import Stars from '../shared/star';
import { favoriteRecipe, unFavoriteRecipe, rateRecipe } from '../../../actions';
import { pointer, gainsboro } from '../listing/styles';
import {
  containerStyle,
  upperContent,
  wrapperStyle,
  wrapper,
  imageWrapper,
  imageStyle,
  contentContainer,
  h2Styles,
  h4Styles,
  description,
  ingContainer,
  pill,
  nutrientsInline,
  nutrient,
  StarFavorite,
  NutrientContainer,
} from './style';

const RecipeDetailsPresentation = ({
  renderer,
  selectedRecipe,
  favoriteRecipe,
  unFavoriteRecipe,
  rateRecipe,
}) => {
  const { renderRule } = renderer;

  if (selectedRecipe) {
    return (
      <div>
        <Header renderer={renderer} />
        <div className={renderRule(containerStyle)}>
          <div className={renderRule(wrapperStyle)}>
            <div className={renderRule(upperContent)}>
              <div className={renderRule(wrapper)}>
                <div className={renderRule(imageWrapper)}>
                  <img
                    className={renderRule(imageStyle)}
                    src={selectedRecipe.image}
                    alt="test"
                  />
                </div>
              </div>

              <div className={renderRule(contentContainer)}>
                <h2 className={renderRule(h2Styles)}>{selectedRecipe.name}</h2>
                <h4 className={renderRule(h4Styles)}>
                  {selectedRecipe.headline}
                </h4>
                <div className={renderRule(description)}>
                  {selectedRecipe.description}
                </div>

                <div className={renderRule(NutrientContainer)}>
                  <h3 className={renderRule(nutrient)}>Nutrients</h3>
                  <div className={renderRule(nutrientsInline)}>
                    <span>
                      <strong>Calories</strong>: {selectedRecipe.calories}
                    </span>
                    <span>
                      <strong>Carbohydrate</strong>: {selectedRecipe.carbos}
                    </span>
                    <span>
                      <strong>Fats</strong>: {selectedRecipe.fats}
                    </span>
                    <span>
                      <strong>Proteins</strong>: {selectedRecipe.proteins}
                    </span>
                  </div>
                </div>

                <span className={renderRule(StarFavorite)}>
                  <Stars
                    onStar={value => rateRecipe(selectedRecipe.id, value)}
                    className={renderRule(pointer)}
                    rating={selectedRecipe.rating}
                  />
                  <span className={renderRule(gainsboro)}>|</span>
                  {selectedRecipe.favorited && selectedRecipe.favorited ? (
                    <Favorites
                      favorites={selectedRecipe.favorites}
                      favorited={selectedRecipe.favorited}
                      recipeId={selectedRecipe.id}
                      renderer={renderer}
                      onFavoriteRecipe={() =>
                        unFavoriteRecipe(selectedRecipe.id)
                      }
                    />
                  ) : (
                    <Favorites
                      favorites={selectedRecipe.favorites}
                      favorited={selectedRecipe.favorited}
                      recipeId={selectedRecipe.id}
                      renderer={renderer}
                      onFavoriteRecipe={() => favoriteRecipe(selectedRecipe.id)}
                    />
                  )}
                </span>
              </div>
            </div>
            <div className={renderRule(ingContainer)}>
              <h2 className={renderRule(h2Styles)}>Ingredients</h2>

              {selectedRecipe.ingredients.map((ingredient, key) => (
                <span key={key} className={renderRule(pill)}>
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <React.Fragment />;
  }
};

export default connect(
  ({ recipes: { recipes } }, { recipeId }) => ({
    selectedRecipe:
      recipes.length && recipes.find(recipe => recipe.id === recipeId),
  }),
  { favoriteRecipe, unFavoriteRecipe, rateRecipe }
)(RecipeDetailsPresentation);
