import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
/*
 Dashboard as DashboardView,
 ProductList as ProductListView,
  Typography as TypographyView,
  Icons as IconsView,
  SignUp as SignUpView,
  Account as AccountView,
  Settings as SettingsView,
  */
  SignIn as SignInView,
  UserList as UserListView,
  NotFound as NotFoundView
} from './views';

import UserDetails from './views/UserList/UserDetails/Details'

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/users"/>
      <RouteWithLayout component={SignInView} exact layout={MinimalLayout} path="/sign-in"/>
      <RouteWithLayout component={UserListView} exact layout={MainLayout} path="/users"/>
      <RouteWithLayout component={NotFoundView} exact layout={MinimalLayout} path="/not-found"/>

      <RouteWithLayout component={UserDetails} exact layout={MainLayout} path="/details"/>

      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
