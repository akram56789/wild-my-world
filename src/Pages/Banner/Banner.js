import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../Banner/banner-images/banner1.jpg';
import banner2 from '../Banner/banner-images/banner2.jpg';
import banner3 from '../Banner/banner-images/banner3.jpg';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
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
                    <h1 className='dear'>My dear </h1>
                    <p >One of the Most beautiful animal</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className='zebra' >Zebra </h1>
                    <p>The Black and White</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className='giant'>Giant </h1>
                    <p>
                        i'm heavy
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;