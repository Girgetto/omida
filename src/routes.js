import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, AboutUs, Services } from './components/pages';
import { MainLayout } from './components/layout';
import { ROUTES } from './constants';

const Routes = (
  <Switch>
    <Route
      path={ROUTES.aboutUs}
      exact
      component={() => (
        <MainLayout>
          <AboutUs />
        </MainLayout>
      )}
    />
    <Route
      path={ROUTES.index}
      exact
      component={() => (
        <MainLayout>
          <Home />
        </MainLayout>
      )}
    />
    <Route
      path={ROUTES.services}
      exact
      component={() => (
        <MainLayout>
          <Services />
        </MainLayout>
      )}
    />
  </Switch>
);

export default Routes;