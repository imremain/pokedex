/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => (
  <footer>
    <div className='footer-wrappper footer-bg'>
      <div className='footer-bottom-area'>
        <div className='container'>
          <div className='footer-border'>
            <div className='row d-flex align-items-center'>
              <div className='col-xl-12 '>
                <div className='footer-copy-right text-center'>
                  <p>
                    Copyright &copy; 2020
                    {' '}
                    All rights reserved | This app is made with
                    {' '}
                    <span role='img' aria-label='emoji'>💚</span>
                    {' '}
                    by
                    {' '}
                    <a href='https://www.montydev.com' target='_blank'>Omar Montoya</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
