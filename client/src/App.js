import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import GamePage from './GamePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/campaign">
          <GamePage />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
