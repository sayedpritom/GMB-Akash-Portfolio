import React from 'react';
import notFound from '../../Images/not-fount-img.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="NotFound">
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;