/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Hero = () => (
  <section className='slider-area '>
    <div className='slider-active'>
      <div className='single-slider slider-height d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-7 col-md-12'>
              <div className='hero__caption'>
                <h1 data-animation='fadeInLeft' data-delay='0.2s'>PokéapiDex</h1>
                <p data-animation='fadeInLeft' data-delay='0.4s'>Here you will find a lot of information from your favorite pokemon, find them now!</p>
                <a href='#pokedex' className='btn hero-btn' data-animation='fadeInLeft' data-delay='0.7s'>Let's Go!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
