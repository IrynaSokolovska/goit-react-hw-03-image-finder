import React, { Component } from 'react';
import { getRequest } from './Services/getRequest';

class SearchInfo extends Component {
  state = {
    hits: '',
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('this.props :>>', this.props);
    if (prevProps.searchText !== this.props.searchText) {
      getRequest(this.props.searchText)
        .then(response => response.json())
        .then(hits => this.setState({ hits: hits.totalHits }));
    }
  }

  render() {
    const { hits } = this.state;
    return (
      <>
        <ul>
          {hits &&
            hits.map(el => {
              return <li key={el.pageUrL}>{el.tags}</li>;
            })}
        </ul>
      </>
    );
  }
}
export default SearchInfo;
