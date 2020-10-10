import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { allCakes } from '../../../assets/images/cakes';


const ImageCarousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={allCakes[0]} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={allCakes[3]} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={allCakes[2]} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={allCakes[4]} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={allCakes[5]} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={allCakes[6]} className="d-block w-100" alt="..."/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>
    );
};

ImageCarousel.defaultProps = {
};

ImageCarousel.propTypes = {
};

export default ImageCarousel;