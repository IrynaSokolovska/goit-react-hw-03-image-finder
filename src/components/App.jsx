import React from 'react';
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { getRequest } from './Services/getRequest';
import toast, { Toaster } from 'react-hot-toast';
import { CircleLoader } from 'react-spinners';


export class App extends Component {
  state = {     
    images: [],
    page: 1,
    query: '',
    visible: false,
    error: false, 
    isLoading: false, 
  };
 
  async componentDidUpdate(prevProps, prevState) { 
  if (prevState.query !== this.state.query ||
      prevState.page !== this.state.page)
  {
    try {
      this.setState({error: false, isLoading: true})
       const data = await getRequest(this.state.query.trim(), this.state.page);
      console.log(data);
      this.setState(() => ({
        images: [...this.state.images, ...data.hits],
        visible: this.state.page === Math.ceil(data.totalHits / 12) ? false : true
      }));
    } catch (error) {
      this.setState({error: true})
      toast('Oops, error!')
    }
    finally{this.setState({isLoading: false})}
      
    }
   };

  handleSubmit = query => {
   
    if (!query.trim()) {
      return;
    }
    this.setState({images: [], page: 1 , query})
  };
  onLoadMore = () => {
    this.setState(prevState => ({
    page: prevState.page + 1
  }))
}


  render() {   

    return (
    <>
        {!this.state.error && (<div>
        <Searchbar  onSubmit={this.handleSubmit } />
          <CircleLoader color="#36d7b7" loading={this.state.isLoading } />         
       
        <Modal />
        <ImageGallery images={this.state.images} />  
        
        {this.state.visible && (<Button onLoadMore={this.onLoadMore} />)}
        <Toaster />
      </div>)}
      </>
    )    
  };
};

