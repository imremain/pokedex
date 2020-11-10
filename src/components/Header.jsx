/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../assets/img/logo.png';

const Header = (props) => (
  <header>
    <div className='header-area header-transparent'>
      <div className='main-header '>
        <div className='header-bottom  header-sticky'>
          <div className='container-fluid'>
            <div className='row align-items-center'>
              <div className='col-xl-2 col-lg-2'>
                <div className='logo'>
                  <a href='/'><img src={Logo} alt='' /></a>
                </div>
              </div>
              <div className='col-xl-10 col-lg-10'>
                <div className='menu-wrapper d-flex align-items-center justify-content-end'>
                  <div className='main-menu d-none d-lg-block'>
                    <nav>
                      <ul id='navigation'>
                        <li className='active'><a href='/'>Home</a></li>
                        <li><a href='courses.html'>Abilities</a></li>
                        <li><a href='about.html'>About</a></li>
                        <li className='button-header'><a href='login.html' className='btn btn3'>Start</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='mobile_menu d-block d-lg-none' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
