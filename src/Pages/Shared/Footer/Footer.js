import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const currentDate = date.getFullYear();
    return (
        <footer id="footer" className="footer bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-12">
                        Photography
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <p>LOCATION</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <p>CONTACT</p>
                        <p>gmb.akash@gmail.com</p>
                        <p>+088 123 456 789</p>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <p>FOLLOW</p>
                    </div>
                    <p className="text-center mt-5">© {currentDate} All Right Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;