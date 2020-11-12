import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const pokemonItem = this.props.pokemons.map((pokemon, index) => {
      return (
        <li key={pokemon.id} id={index} title={pokemon.name}>
          <Pokemon
            name={pokemon.name}
            types={pokemon.types}
            url={pokemon.url}
          />
        </li>
      );
    });
    return (
      <div>
        <ul>{pokemonItem}</ul>
      </div>
    );
  }
}

export default PokeList;
