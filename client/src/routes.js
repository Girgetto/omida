import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Login,
} from './components/pages';


const Routes = (
  <div>
    <Switch>
      <Route path="/" exact component={() => <Login />} />
    </Switch>
  </div>
);

export default Routes;