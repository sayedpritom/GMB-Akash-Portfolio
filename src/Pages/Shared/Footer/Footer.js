import React from 'react';
import './Footer.css';
import logoDark from '../../../Images/logo-dark.png';
import tt from '../../../Images/social/tt-black.png';
import fb from '../../../Images/social/fb-black.png';
import ig from '../../../Images/social/ig-black.png';
import yt from '../../../Images/social/yt-black.png';

const Footer = () => {
    const date = new Date();
    const currentDate = date.getFullYear();
    return (
        <footer id="footer" className="footer text-dark pt-5">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-12">
                        <p>Photography</p>
                        <img className="logo-icon" src={logoDark} alt="" />
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
                        <div className="row">
                        <a href="https://www.facebook.com/gmbakash/" className="footer-social-media"><img className="img-fluid" src={fb} alt="" /></a>
                        <a href="https://www.instagram.com/gmbakash/" className="footer-social-media"><img className="img-fluid" src={ig} alt="" /></a>
                        <a href="https://mobile.twitter.com/gmb_akash" className="footer-social-media"><img className="img-fluid" src={tt} alt="" /></a>
                        <a href="https://www.youtube.com/c/GMBAkash_Photojournalist" className="footer-social-media"><img className="img-fluid" src={yt} alt="" /></a>
                        </div>
                    </div>
                    <p className="text-center text-copy-right">© {currentDate} All Right Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;