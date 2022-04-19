import React from 'react';
import notFoundImage from '../../Images/404.jpg';
import './NotFound.css';

const NotFound = () => {
    // not found route for url that doesn't have any designated route
    return (
        <div className="d-flex justify-content-center my-5 notFound">
            <div className="mt-5">
                <img className="img-fluid" src={notFoundImage} alt="" />
            </div>
        </div>
    );
};

export default NotFound;