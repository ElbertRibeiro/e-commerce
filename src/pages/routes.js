import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './home';

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;