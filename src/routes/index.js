import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
const MovieList = lazy(() => import('../pages/movie-list'));
const MovieDetail = lazy(() => import('../pages/movie-detail'));

const Routes = (props) => {
  return (
    <>
      <Router>
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/movie" />
            </Route>
            <Route exact path="/movie" component={MovieList} />
            <Route path="/movie/:id" component={MovieDetail} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default Routes;
