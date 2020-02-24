import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/pages';
import { MainLayout } from './components/layout';

const Routes = (
  <Switch>
    <Route
      path="/"
      exact
      component={() => (
        <MainLayout>
          <Home />
        </MainLayout>
      )}
    />
    <Route
      path="/about-us"
      exact
      component={() => (
        <MainLayout>
          <Home />
        </MainLayout>
      )}
    />
  </Switch>
);

export default Routes;
