import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../Images/banner/banner1.png';
import banner2 from '../../../Images/banner/banner2.png';
import banner3 from '../../../Images/banner/banner3.png';

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="banner">
            <div className=" container">
                <Carousel id="home" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div className="slider-container">
                            <div className="slider-caption">
                                <h1><span className="photographer-name">GMB AKASH</span> <br /> A Bangladeshi Photojournalist at Panos Pictures,London. </h1>
                            </div>
                            <div className="slider-image">
                                <img
                                    className="d-block"
                                    src={banner1}
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="slider-container">
                            <div className="slider-caption">
                                <h1>
                                    He is Creating <span className="photographer-name">Photography</span> and Stories while helping the people he photographs.
                                </h1>
                            </div>
                            <div className="slider-image">
                                <img
                                    className="d-block"
                                    src={banner2}
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="slider-container">
                            <div className="slider-caption">
                                <h1> Akash concentrates on people living on the <span className="photographer-name">Edge</span>  of society around the world. </h1>
                            </div>
                            <div className="slider-image">
                                <img
                                    className="d-block"
                                    src={banner3}
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;