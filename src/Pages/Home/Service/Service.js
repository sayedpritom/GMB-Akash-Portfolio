import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    
    // destructuring props data
    const { name, img, description, price, id } = service;

    const navigate = useNavigate();

    // navigate to specific service page with id parameter
    const navigateToServiceDetails = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className="service">
            <div style={{ backgroundImage: `url(${img})` }}className="service-image-container">
            </div>
            <h2>{name}</h2>
            <p className="price">Price: ${price}</p>
            <p className="service-details"><small>{description}</small></p>
            <button className="button" onClick={() => navigateToServiceDetails(id)}>Book Now</button>
        </div>
    );
};

export default Service;