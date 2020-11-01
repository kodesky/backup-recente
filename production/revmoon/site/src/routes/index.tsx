/* eslint-disable no-shadow */
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <AuthRoutes />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
