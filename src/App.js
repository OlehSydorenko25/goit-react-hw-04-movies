import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import routes from './routes';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import('./views/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);

const App = () => (
  <>
    <Navigation />
    <Suspense fallback={<h4>Loading...</h4>}>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.moviesDetails} component={MovieDetailsPage} />
        <Route
          path={routes.movies}
          render={props => <MoviesPage {...props} />}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
