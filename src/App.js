import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Finder from './Components/Finder'
import Pokedex from './Components/Pokedex'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      caughtPokemon: [],
    }
  }

  componentDidMount(){}

  catchPokemon(pokemon){}

  saveName(id, newName){}

  releasePokemon(id){}

  render(){
    return (
      <div className="App">
        App
        <Header/>
        <Finder/>
        <Pokedex/>
      </div>
    );
  }
  
}

export default App;
