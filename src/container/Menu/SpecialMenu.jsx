import React from 'react';

import { SubMenuItem, MenuItem, SubHeading } from '../../components'
import { images, data } from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits you palatte'></SubHeading>
      <h1 className='headtext__cormorant'>Today’s Special </h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Apple Juice</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}></MenuItem>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="menu image" />
      </div>

      <div className='app__specialMenu-menu_cocktail flex__center'>
        <p className='app__specialMenu-menu_heading'>Orange Juice</p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}></MenuItem>
          ))}
        </div>
      </div>

    </div>

    <div style={{ merginTop: '15px' }}>
      <button type='button' className='custom__button'>view more</button>
    </div>

  </div>
);

export default SpecialMenu;
