import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import GamePage from './game-page/GamePage';
import SetupPage from './setup-page/SetupPage';

const NotFound = ({ location }) => (
  <h3> No match found for {location.pathname}</h3>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/campaign" component={GamePage} />
        <Route exact path="/setup" component={SetupPage} />
        <Route exact path="/" component={LandingPage} />
        <Route path="*" component={NotFound} />{' '}
      </Switch>
    </Router>
  );
};

export default App;
