import React, {Component} from 'react';
import StatsGrid from './StatsGrid';
import HeaderBar from './HeaderBar';
import SimpleModalWrapper from './SimpleModalWrapper';

import characters from './characters.json'



class App extends Component {
  state = {
    modalOpen: false,
  };

  handleModalOpen = () => {
    console.log("open")
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  printChars = () => {
    console.log(characters);
  }

  render() {
    return (
      <div>
        <HeaderBar handleModalOpen={this.handleModalOpen}/>
        <SimpleModalWrapper
          open={this.state.modalOpen}
          handleModalOpen={this.handleModalOpen}
          handleModalClose={this.handleModalClose}
          characters={characters}
        />
        <StatsGrid />
      </div>
    );
  }
}

export default App;
