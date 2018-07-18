import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import StatsGrid from './StatsGrid';
import HeaderBar from './HeaderBar'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <StatsGrid />
      </div>
    );
  }
}

export default App;
