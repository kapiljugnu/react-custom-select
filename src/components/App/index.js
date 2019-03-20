import React, { Component } from 'react';
import './style.css';
import DropDown from '../DropDown';
import { getGames } from '../../services/getGames';


class App extends Component {

  state = { games: [], hasError: false }

  componentDidMount() {
    getGames()
      .then((games) => { this.setState({ games, hasError: false }) })
      .catch((error) => { this.setState({ games: [], hasError: true }) })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="gamepicker">
            <p>Pick a game below</p>
            <DropDown
              options={this.state.games}
              selectTitle="Games"
              searchTitle="Search for games.."
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
