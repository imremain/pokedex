import React from 'react';
import Cards from './Cards'
import useInitialState from '../hooks/useInitialState';

const Pokedex = () => {
  let offset = 0;
  let limit = 20;
  const API = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=721'
  const initialState = useInitialState(API);
  return (
    <div id='#pokedex' className='courses-area section-padding40 fix'>
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
          {initialState.results.slice(offset, limit).map(item =>
            <Cards key={item.id} {...item} />
          )}
        </div>
        <div className='row justify-content-center'>
          <div className='col-xl-7 col-lg-8'>
            <div className='section-tittle text-center mt-40'>
              <button className='border-btn'>Load More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Pokedex;
