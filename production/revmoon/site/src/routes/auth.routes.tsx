import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/index';
import ForgotPassword from '../pages/ForgotPassword/index';
import Register from '../pages/Register/index';

const AuthRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
    </Switch>
  );
};

export default AuthRoutes;
