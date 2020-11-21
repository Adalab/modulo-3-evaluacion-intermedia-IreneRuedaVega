import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";

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
        <ul className="cards">{pokemonItem}</ul>
      </div>
    );
  }
}

PokeList.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.string,
  pokemonItem: PropTypes.array,
};

export default PokeList;
