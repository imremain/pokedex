import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Cards from './Cards'

export default class Pokedex extends React.Component {
  state = {

    loading: true,
    error: null,
    data: {
      results: [],
    },
    pokes: 20,
  };

  componentDidMount(){
    this.fetchPokemon()
  }

  fetchPokemon = async () => {
    this.setState({loading:true, error: null})


    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${this.state.pokes}`);
      const data = await response.json();

      this.setState({
        loading: false,
        data: data,
        pokes: this.state.pokes +20
      });
    }catch (error){
      this.setState({
        loading: false,
        error: error,
      })
    }
  }

  render(){
  return (
    <div id='pokedex' className='courses-area section-padding40 fix'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-7 col-lg-8'>
            <div className='section-tittle text-center mb-55'>
              <h2>Find Em All!</h2>
              <input className='single-input' type='text' placeholder='Search' />
            </div>
          </div>
        </div>
        <div className='row'>
          {this.state.data.results.map(item =>
            <Cards key={item.id} {...item} /> || <Skeleton />
          )}
        </div>
        {this.state.loading && (
          <Skeleton count={5} />
        )}
        {!this.state.loading && (
        <div className='row justify-content-center'>
          <div className='col-xl-7 col-lg-8'>
            <div className='section-tittle text-center mt-40'>
              <button className='border-btn' onClick={() => this.fetchPokemon()}>Load More</button>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
    );
  }
}