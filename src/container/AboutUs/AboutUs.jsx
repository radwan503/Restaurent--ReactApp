import React from 'react';

import images from '../../constants/images'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G letter" />
    </div>
    <div className='app__aboutus-content flex__center'>

      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt="about spoon" className='spoon_img' />
        <p className='p__opensans'> The History of Kitchens and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables".</p>
        <button type='button' className='custom__button'>No More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about spoon" className='spoon_img' />
        <p className='p__opensans'> The History of Kitchens and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables".</p>
        <button type='button' className='custom__button'>No More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
