import React from 'react';

import { ToastContainer } from 'react-toastify';
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { PokemonInfo } from "./PokemonInfo/PokemonInfo";
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';


export class App extends Component {
  state = {
    
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.state.setState({ pokemonName })
  }
  
  // export class App extends Component {
  // state = {
  //   query: '',
  //    images: [],
  //    page: 1,
  //    loading: false,
  //   };
    
  // componentDidMount() {
  //   this.setState({ loading: true });


  //   fetch('https://pixabay.com/api/?q=cat&page=1&key=38039497-5ee2ddc1c8430029b87bf9d3f&image_type=photo&orientation=horizontal&per_page=12')
  //     .then(res => res.json())
  //   .then(pokemon => this.setState({pokemon})).finally(()=> this.setState({loading: false}))
  // };
  
  
  // handleLoadMore = () => {
  //    this.setState(prevState => ({
  //     page: prevState.page + 1,
  //    }));
  //  };
  
  componentDidUpdate(prevProps, prevState) { 
    if (prevState.guery !== this.state.query ||
      prevState.page !== this.state.page)
    {
      // http request
    }
  };

  handleLoadMore = () => {
    this.setState(prevState =>({page:prevState.page + 1}))
  };

  render() {
    // const { images, query, page, pokemon } = this.state;

    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <Searchbar onSubmitF={this.handleFormSubmit} />
        <Button />
        
        <PokemonInfo pokemon={this.state.pokemonName} />
        <Modal />
        <ImageGallery />    
          
      
        
        
        <ToastContainer autoClose={5000} />
      </div>
    )
    
  };
};

// return (
//       <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//         {this.state.loading&&<p>Loading loading</p>}
//         {this.state.pokemon&&<div>hellow</div>}
//       </div>
//     )