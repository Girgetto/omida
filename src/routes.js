import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, AboutUs } from './components/pages';
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
          <AboutUs />
        </MainLayout>
      )}
    />
  </Switch>
);

export default Routes;
