import React, {Component} from 'react';
import StatsGrid from './StatsGrid';
import HeaderBar from './HeaderBar';
import SimpleModalWrapper from './SimpleModalWrapper';

class App extends Component {
  state = {
    modalOpen: false,
    selectedCharacters: [],
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  selectCharacter = char => {
    //clone
    let characters = this.state.characters.slice(0);
    let removed = characters.splice(characters.findIndex(character => character.name === char), 1)
    this.setState(prevState => ({
      characters: characters,
      selectedCharacters: [...prevState.selectedCharacters, removed[0]]
    }));
  }

  componentWillMount = () => {
    const chars = require('./characters.json').characters.sort((a, b)=>{
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    });
    this.setState({ characters: chars });
  }

  render() {
    return (
      <div>
        <HeaderBar handleModalOpen={this.handleModalOpen}/>
        <SimpleModalWrapper
          selectCharacter={this.selectCharacter}
          open={this.state.modalOpen}
          handleModalClose={this.handleModalClose}
          characters={this.state.characters}
        />
      <StatsGrid characters={this.state.selectedCharacters}/>
      </div>
    );
  }
}

export default App;
