import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Link to="/campaign">Start/continue Campaign</Link>
      </div>
    );
  }
}
