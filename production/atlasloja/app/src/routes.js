import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'

import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'
import ForgotConfirm from './pages/ForgotConfirm'

import Home from './pages/Home'

function Routes() {
  return (
    <HashRouter basename="/">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/forgot/:hash" component={ForgotConfirm} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
