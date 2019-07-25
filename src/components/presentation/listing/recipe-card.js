import React from 'react';
import { connect } from 'react-redux';
import { RECIPE_DETAIL_ROUTE } from '../../../actions/constants';
import { Link } from 'react-router-dom';
import { createComponent } from 'react-fela';
import { keyframe } from '../shared/styles';
import { favoriteRecipe, unFavoriteRecipe, rateRecipe } from '../../../actions';
import Favorites from '../shared/favorite';
import { bindActionCreators } from 'redux';

import {
  cardContent,
  cardWrapper,
  anchorStyle,
  imageStyle,
  headLineStyle,
  cardName,
  nameAnchor,
  timeStyle,
  pointer,
  gainsboro,
  starFavoriteWrapper,
} from './styles';
import Stars from '../shared/star';

const RecipeCard = ({
  id,
  name,
  headline,
  imageUrl,
  time,
  favorites,
  favorited,
  rating,
  renderer,
  dispatch,
}) => {
  const { renderRule } = renderer;

  const mapStylesToProps = ({ favorites, favorited }, renderer) => ({
    animationName: renderer.renderKeyframe(keyframe),
    animationDuration: '1s',
  });

  const FelaFavorite = createComponent(mapStylesToProps, Favorites, [
    'favorites',
    'favorited',
    'recipeId',
    'renderer',
    'onFavoriteRecipe',
    'className',
  ]);

  return (
    <div className={renderRule(cardWrapper)}>
      <Link
        to={`${RECIPE_DETAIL_ROUTE}${id}`}
        className={renderRule(anchorStyle)}>
        <div className="">
          <div className="">
            <div className="" />
            <img alt={name} className={renderRule(imageStyle)} src={imageUrl} />
          </div>
        </div>
      </Link>
      <div className={renderRule(cardContent)}>
        <Link
          to={`${RECIPE_DETAIL_ROUTE}${id}`}
          className={renderRule(nameAnchor)}>
          <header className="">
            <h3 className={renderRule(cardName)}>{name}</h3>
          </header>
        </Link>
        <p className={renderRule(headLineStyle)}>{headline}</p>
        <div className="">
          <div className={renderRule(timeStyle)}>
            <span className="">
              <span>{time}</span>
            </span>

            <span className={renderRule(starFavoriteWrapper)}>
              <Stars
                onStar={value => dispatch(rateRecipe(id, value))}
                className={renderRule(pointer)}
                rating={rating}
              />
              <span className={renderRule(gainsboro)}>|</span>
              {favorited && favorited ? (
                <FelaFavorite
                  className={renderRule(pointer)}
                  favorites={favorites}
                  favorited={favorited}
                  recipeId={id}
                  renderer={renderer}
                  onFavoriteRecipe={() => dispatch(unFavoriteRecipe(id))}
                />
              ) : (
                <FelaFavorite
                  className={renderRule(pointer)}
                  favorites={favorites}
                  favorited={favorited}
                  recipeId={id}
                  renderer={renderer}
                  onFavoriteRecipe={() => dispatch(favoriteRecipe(id))}
                />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      favoriteRecipe: favoriteRecipe,
      unFavoriteRecipe: unFavoriteRecipe,
      rateRecipe: rateRecipe,
    },
    dispatch
  );
};

export default connect(mapDispatchToProps)(RecipeCard);
