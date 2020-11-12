import React from "react";
import "../stylesheets/App.scss";
import pokemons from "../data/pokemons.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: pokemons,
    };
  }
  render() {
    console.log(pokemons);
    return <div>Irene</div>;
  }
}

export default App;
