/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable array-bracket-spacing */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../pages/Main';
import Pokemon from '../pages/Pokemon';

import '../assets/scss/style.scss';
import '../assets/css/animate.min.css';
import '../assets/css/animated-headline.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/hamburgers.min.css';
import '../assets/css/nice-select.css';
import '../assets/css/price_rangs.css';
import '../assets/css/progressbar_barfiller.css';
import '../assets/css/responsive.css';
import '../assets/css/slick.css';
import '../assets/css/style.css';
import '../assets/css/slicknav.css';

const App = (props) => {
  return (
    <div className='App'>
      
      <Helmet>
        <script src="%PUBLIC_URL%/../assets/js/vendor/jquery-1.12.4.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/vendor/modernizr-3.5.0.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/jquery.ajaxchimp.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/jquery.slicknav.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/jquery.magnific-popup.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/jquery.nice-select.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/jquery.sticky.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/jquery.barfiller.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/jquery.counterup.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/jquery.form.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/jquery.validate.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/jquery.countdown.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/popper.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/bootstrap.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/owl.carousel.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/slick.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/wow.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/animated.headline.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/gijgo.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/waypoints.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/hover-direction-snake.min.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/contact.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/mail-script.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/plugins.js" type="text/javascript"/>
        <script src="%PUBLIC_URL%/../assets/js/main.js" type="text/javascript"/>
      </Helmet>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/pokemon" component={Pokemon} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
