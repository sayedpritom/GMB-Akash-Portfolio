import { Button } from "react-bootstrap";
import React from 'react';
import laptop from '../../Images/rm355-pf-s73-card-laptop-01-mockup.jpg'
import Reviews from "../Reviews/Reviews";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='container my-5'>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1>Get your professional laptop <br /> at the best possible price</h1>
                    <p>All you need is a laptop or a PC and an Internet connection and you can pretty much do almost anything and create almost any type of company</p>
                    <Button>Learn more</Button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid rounded" src={laptop} alt="" />
                </div>
            </div>
            <Reviews onHomePage={true}></Reviews>
            <Link to="/reviews"><Button>See All Reviews</Button></Link>
        </div>
    );
};

export default Home;