import { Component } from 'react';
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
