import React from "react";

class Pokemon extends React.Component {
  render() {
    return (
      <article>
        <div>
          <h3>{this.props.name}</h3>
        </div>
        <div>
          <img src={this.props.url} alt={this.props.name} />
        </div>
      </article>
    );
  }
}

export default Pokemon;
