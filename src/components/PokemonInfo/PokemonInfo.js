import { Component } from 'react';

export class PokemonInfo extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      console.log('change name');
      console.log('prevProps.pokemonName:', prevProps.pokemonName);
      console.log('this.props.pokemonName:', this.props.pokemonName);
    }
  }

  render() {
    return (
      <div>
        <h1>
          <p>{this.props.pokemonName}</p>
        </h1>
      </div>
    );
  }
}
