import React from 'react';
import axios from 'axios'

import DarkMode from './components/DarkMode'
import Players from './components/Players'

import './App.css';

class App extends React.Component {
  state = {}

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({ 'players': res.data })
      })
      .catch(err => {
        return err.response
      })
  }

  render () {
    return (
      <div className="App">
        <h1>Women's World Cup Players</h1>
        <DarkMode />
        <Players players={this.state.players}/>
      </div>
    )
  }
}

export default App;
