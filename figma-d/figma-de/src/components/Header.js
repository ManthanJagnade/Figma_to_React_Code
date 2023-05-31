// Header.js

import React from 'react';
import ButtonHeader from './ButtonHeader';
import pagelogo from './assets/Vector.svg';
import boysvg from './assets/Illustration 1.svg';
import './HeaderSection/header.scss';
import './HeaderSection/sectionone.scss';

const Header = () => {
  return (
    <div className='headersection'>
      {/* logo */}
      <div className='header-logo'>
        <img src={pagelogo} alt='logo' />
        <h3>Lasles<span>VPN</span></h3>
      </div>

      {/* page btn */}
      <div className='header-button'>
        <ButtonHeader name='About' />
        <ButtonHeader name='Features' />
        <ButtonHeader name='Pricing' />
        <ButtonHeader name='Testimonials' />
        <ButtonHeader name='Help' />
      </div>

      {/* signin/up */}
      <div className='sign-in-up'>
        <button>Sign in</button>
        <button>Sign Up</button>
      </div>

      {/* section one */}
      <div className='section-one'>
        {/* first div */}
        <div className='section-content'>
          {/* Content */}
          <div className='inner-content'>
            <h1>
              Want anything to be easy with <span>LaslesVPN.</span>
            </h1>
            <p>
              Provide a network for all your needs with ease <br />
              and fun using LaslesVPN discover interesting features from us.
            </p>
            <button>Get Started</button>
          </div>
          {/* boy logo */}
          <div className='section-logo'>
            <img src={boysvg} alt='boysvg' />
          </div>
        </div>
        {/* second div */}
        <div></div>
      </div>
    </div>
  );
};

export default Header;
