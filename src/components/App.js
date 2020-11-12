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
    /* console.log(data); */
    return (
      <div>
        <h1 className="title">Mi lista de pokémon</h1>
        <h2 className="slogan">¡ Hazte con todos !</h2>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
