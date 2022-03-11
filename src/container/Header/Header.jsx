import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';

import images from '../../constants/images'

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavor"></SubHeading>
      <h1 className='app__header-h1'>The Key to fine dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>We love restaurants as much as you do. That’s why we’ve been helping them fill tables since 1999. Welcome to elixir restaurant</p>
      <button type="button" className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header-img" />
    </div>
  </div>
);

export default Header;
