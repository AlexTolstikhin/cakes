import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ImageCarousel = ({ images = []  }) => 
    <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showArrows={false}
        showStatus={false}
        transitionTime={1500}
    >
        {
            images.map(imgSrc => <div><img src={imgSrc} alt="cake" /></div>)
        }
    </Carousel>;

export default ImageCarousel;