import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ImageCarousel = ({ showThumbs, images = []  }) => 
    <Carousel
        autoPlay
        dynamicHeight
        infiniteLoop
        interval={5000}
        showArrows={false}
        showStatus={false}
        showThumbs={showThumbs}
        transitionTime={1500}
    >
        {
            images.map(imgSrc => <div><img src={imgSrc} alt="cake" /></div>)
        }
    </Carousel>;

ImageCarousel.defaultProps = {
    showThumbs: true,
    images: []
};

ImageCarousel.propTypes = {
    showThumbs: PropTypes.bool,
    images: PropTypes.array
};

export default ImageCarousel;