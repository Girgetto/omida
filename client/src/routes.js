import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/pages';
import { MainLayout } from './components/layout';

const Routes = (
  <div>
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
    </Switch>
  </div>
);

export default Routes;
