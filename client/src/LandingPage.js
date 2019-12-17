import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Link data-testid="campaignPageLink" to="/campaign">
          Continue Campaign
        </Link>
        <Link data-testid="setupPageLink" to="/setup">
          Setup a new Campaign
        </Link>
      </div>
    );
  }
}
