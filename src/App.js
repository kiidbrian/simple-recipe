import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';

import RecipesListContainer from './components/container/listing';
import RecipeDetailsContainer from './components/container/details';
const renderer = createRenderer();

const App = () => (
  <Router>
    <RendererProvider renderer={renderer}>
      <React.Fragment>
        <Route exact path="/" render={() => <Redirect to="/recipes" />} />
        <Route
          path="/recipes"
          exact
          render={props => (
            <RecipesListContainer {...props} renderer={renderer} />
          )}
        />

        <Route
          path="/recipe/:id"
          exact
          render={props => (
            <RecipeDetailsContainer {...props} renderer={renderer} />
          )}
        />
      </React.Fragment>
    </RendererProvider>
  </Router>
);

export default App;
