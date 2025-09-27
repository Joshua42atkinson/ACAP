import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slides.css';

const Slides = ({ children }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop={false}
      showIndicators={true}
      useKeyboardArrows
      className="presentation-mode"
    >
      {children}
    </Carousel>
  );
};

export default Slides;