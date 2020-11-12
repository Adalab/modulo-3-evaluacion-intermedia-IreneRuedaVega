import React from "react";

class Pokemon extends React.Component {
  render() {
    const pokemonsTypes = this.props.types.map((type, index) => {
      return <li key={index}>{type}</li>;
    });
    return (
      <article>
        <div>
          <h3>{this.props.name}</h3>
        </div>
        <div>
          <img src={this.props.url} alt={this.props.name} />
        </div>
        <h4>{pokemonsTypes}</h4>
      </article>
    );
  }
}

export default Pokemon;
