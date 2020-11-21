import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Pokemon.scss";

class Pokemon extends React.Component {
  render() {
    const pokemonsTypes = this.props.types.map((type, index) => {
      return (
        <li className="pokemon__types--list" key={index}>
          {type}
        </li>
      );
    });
    return (
      <article className="pokemon">
        <div className="pokemon__img">
          <img
            className="pokemon__img--card"
            src={this.props.url}
            alt={this.props.name}
          />
          <div className="pokemon__name">
            <h3 className="pokemon__name--card">{this.props.name}</h3>
          </div>
        </div>
        <ul className="pokemon__types">{pokemonsTypes}</ul>
      </article>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

export default Pokemon;
