import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as HeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as HeartSolid } from '@fortawesome/free-solid-svg-icons';
import { fontAwesome } from './styles';

const Favorites = ({
  favorites,
  favorited,
  recipeId,
  dispatch,
  renderer,
  onFavoriteRecipe,
}) => {
  let active = null;
  if (favorited && favorites > 0) {
    active = (
      <React.Fragment>
        <FontAwesomeIcon
          icon={HeartSolid}
          className={renderer.renderRule(fontAwesome, { color: '#e0245e' })}
          onClick={() => onFavoriteRecipe()}
        />
        <span style={{ color: '#e0245e' }}>{favorites}</span>
      </React.Fragment>
    );
  } else {
    active = (
      <React.Fragment>
        <FontAwesomeIcon
          icon={HeartRegular}
          className={renderer.renderRule(fontAwesome, { color: '#e0245e' })}
          onClick={() => onFavoriteRecipe()}
        />
        <span style={{ color: '#e0245e' }}>{favorites}</span>
      </React.Fragment>
    );
  }
  return active;
};

export default Favorites;
