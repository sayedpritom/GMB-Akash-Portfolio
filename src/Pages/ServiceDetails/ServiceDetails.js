import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData.js/fakeData';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    const { name, img, description, price } = fakeData.find(data => data.id === parseInt(serviceId))


    return (
        <div className="serviceDetails">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="service-details-box-container col-md-8">
                        <img src={img} alt="" />
                        <h2 className="programme-name">Welcome to {name} Programme</h2>
                        <p className="programme-description">{description}</p>
                        <h6 className="programme-price">${price}</h6>
                        <div className="text-center">
                            <Link to="/checkout"><button className="button programme-button">Checkout</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;