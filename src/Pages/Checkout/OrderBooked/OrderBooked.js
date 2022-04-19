import React from 'react';
import orderBooked from '../../../Images/order confirmed.jpg';
import './OrderBooked.css';

const OrderBooked = () => {
    return (
        <div className="order-booked">
            <div className="container">
                <div className="bg-white rounded shadow text-center mb-5 pb-4">
                    <img className="img-fluid" src={orderBooked} alt="" />
                    <h3>Thank  you! Your order is booked</h3>
                </div>
            </div>
        </div>
    );
};

export default OrderBooked;