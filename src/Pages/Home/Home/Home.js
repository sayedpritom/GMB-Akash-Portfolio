import React from 'react';
import Collage from '../../Collage/Collage';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    // This is home route
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Collage></Collage>
            <Footer></Footer>
        </>
    );
};

export default Home;