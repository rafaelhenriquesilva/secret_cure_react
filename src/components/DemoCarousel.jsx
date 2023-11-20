import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import health from '../assets/carouselHealthImage.png'
import tree from '../assets/tree.jpg'
import good_life from '../assets/good_life.png'
import { createRoot } from 'react-dom/client'; // Updated import

export class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                {/* <div>
                    <img src={good_life} />
                    <p className="legend">Vida saúdavel</p>
                </div> */}
               
                {/* <div>
                    <img src={tree} />
                    <p className="legend">Natureza</p>
                </div> */}
            </Carousel>
        );
    }
};

// Use createRoot to render your component
const root = createRoot(document.querySelector('.demo-carousel'));
root.render(<DemoCarousel />);
