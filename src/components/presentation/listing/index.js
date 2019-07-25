import React from 'react';
import { connect } from 'react-redux';
import Header from '../shared/header';
import RecipeCard from './recipe-card';
import { cardContainer, cardHolder } from './styles';
import { formatTime } from '../../../utility';

const RecipesListPresentation = props => {
  const { renderer, recipes } = props;
  const { renderRule } = renderer;

  return (
    <React.Fragment>
      <Header renderer={renderer} />
      <div className={renderRule(cardContainer)}>
        <div className={renderRule(cardHolder)}>
          {recipes.recipes &&
            recipes.recipes.map((d, key) => (
              <RecipeCard
                id={d.id}
                name={d.name}
                favorites={d.favorites}
                favorited={d.favorited & d.favorited}
                rating={d.rating}
                description={d.description}
                headline={d.headline}
                imageUrl={d.thumb}
                time={formatTime(d.time)}
                key={key}
                renderer={renderer}
              />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(state => {
  return {
    recipes: state.recipes,
  };
})(RecipesListPresentation);
