import { Component } from 'react';
// import { toast } from 'react-toastify';
import { SearchBar, SearchBarForm, SearchBarInput } from './SearchBar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = evt => {
    this.setState({ value: evt.target.value.toLowerCase() });
  };

  render() {
    console.log(this.props);

    return (
      <SearchBar>
        <SearchBarForm
          onSubmit={evt => {
            evt.preventDefault();
            this.props.onSubmit(this.state.value);
          }}
        >
          <SearchBarInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
        </SearchBarForm>
      </SearchBar>
    );
  }
}

export default Searchbar;

// export const Searchbar = ({ onSubmit }) => {

// const handleSubmit = (evt) => {
//     evt.pteventDefault();

//     this.setState({
//     query: evt.target.elements.guery.value,
//     images: [],
//     page: 1,
//     });
//     };

//     return (
//         <Searchbar>

//         <form>
//           <input type="" hame="query"></input>
//           <button type="submit">Search</button>
//         </form>
//         </Searchbar>

//     )
// }

//  return (
//    <div>
//      <form onSubmit={this.handleSubmit}>
//        <input type="text" name="query" />
//        <button type="submit">Search</button>
//      </form>
//      {this.state.images.length > 0 && <div>Gallery</div>}
//      <button onClick={this.handleLoadMore}>Load more</button>
//    </div>
//  );-----------------------------------------------------------------
// import { Component } from 'react';
// import { toast } from 'react-toastify';
// import {
//   SearchBarDiv,
//   SearchBarForm,
//   SearchBarInput,
// } from './SearchBar.styled';

// export class Searchbar extends Component {
//   state = {
//     value: '',
//     pokemonName: '',
//   };

//   handleNameChange = evt => {
//     this.setState({ pokemonName: evt.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = evt => {
//     evt.pteventDefault();
//     if (this.state.pokemonName.trim() === '') {
//       return toast('Wow so easy!');
//     }
//     this.props.onSubmitF(this.state.pokemonName);
//     this.state({ pokemonName: '' });
//   };

//   render() {
//     return (
//       <SearchBarDiv>
//         <SearchBarForm onSubmit={this.handleSubmit}>
//           <SearchBarInput
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             name="pokemonName"
//             defaultValue={this.state.pokemonName}
//             onChange={this.state.handleNameChange}
//           />
//           <button type="submit" className="button">
//             <span className="button-label">Search</span>
//           </button>
//         </SearchBarForm>
//       </SearchBarDiv>
//     );
//   }
// }
// export default Searchbar;
