import React from "react";
import "../stylesheets/App.scss";
import data from "../data/pokemons.json";
import PokeList from "./PokeList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: data,
    };
  }
  render() {
    console.log(data);
    return (
      <div>
        <h1>Lista de pokemons</h1>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
