import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../Banner/banner-images/banner1.jpg';
import banner2 from '../Banner/banner-images/banner2.jpg';
import banner3 from '../Banner/banner-images/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) =>{
        setIndex(selectedIndex)
    }
    return (
        <Carousel className='banner' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          
            <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>My dear</h3>
                <p className='text-dark'>One of the Most buitifool animal</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
};

export default Banner;