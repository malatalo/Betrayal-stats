import React, {Component} from 'react';
import StatsGrid from './StatsGrid';
import HeaderBar from './HeaderBar';
import SimpleModalWrapper from './SimpleModalWrapper';

class App extends Component {
  state = {
    modalOpen: false,
    selectedCharacters: [],
  };

  componentWillMount = () => {
    const chars = require('./characters.json').characters
    this.setState({ characters: chars }, this.sortCharacters);
  }

  sortCharacters = () => {
    let chars = this.state.characters;
    chars.sort((a, b)=>{
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    });
    this.setState({ characters: chars });
  }

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  selectCharacter = charName => {
    //clone
    let characters = this.state.characters.slice(0);
    let removed = characters.splice(characters.findIndex(character => character.name === charName), 1)
    this.setState(prevState => ({
      characters: characters,
      selectedCharacters: [...prevState.selectedCharacters, removed[0]]
    }));
  }

  deleteCharacter = charName => {
    //TODO take a sad confirm and make it better
    if(!window.confirm("Delete " + charName + "?")) return;
    
    let selCharacters = this.state.selectedCharacters.slice(0);
    let removed = selCharacters.splice(selCharacters.findIndex(c => c.name === charName), 1)
    this.setState(prevState => ({
      selectedCharacters: selCharacters,
      characters: [...prevState.characters, removed[0]]
    }), this.sortCharacters);
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
      <StatsGrid characters={this.state.selectedCharacters} deleteCharacter={this.deleteCharacter}/>
      </div>
    );
  }
}

export default App;
