import React from "react";
import "../stylesheets/App.scss";
import data from "../data/pokemons.json";
import PokeList from "./PokeList";
import pokemonImage from "../images/pokemon-logo.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: data,
    };
  }
  render() {
    return (
      <div className="page">
        <div className="page__wrapper">
          <h1 className="page__wrapper--title">Mi Pokédex</h1>
          <img
            className="page__wrapper--logo"
            src={pokemonImage}
            alt="logo de pokemon"
          />
        </div>
        <h2 className="page__slogan">¡ Hazte con todos !</h2>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
