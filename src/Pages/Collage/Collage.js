import React from 'react';
import './Collage.css';
import image1 from '../../Images/collage/1.png';
import image2 from '../../Images/collage/2.png';
import image3 from '../../Images/collage/3.png';
import image4 from '../../Images/collage/4.png';
import image5 from '../../Images/collage/5.png';
import image6 from '../../Images/collage/6.png';
import image7 from '../../Images/collage/7.png';
import image8 from '../../Images/collage/8.png';
import image9 from '../../Images/collage/9.png';
import image10 from '../../Images/collage/10.png';
import image11 from '../../Images/collage/11.png';
import image12 from '../../Images/collage/12.png';
import image13 from '../../Images/collage/13.png';
import image14 from '../../Images/collage/14.png';
import image15 from '../../Images/collage/15.png';
import image16 from '../../Images/collage/16.png';
import image17 from '../../Images/collage/17.png';
import image18 from '../../Images/collage/18.png';
import image19 from '../../Images/collage/19.png';
import image20 from '../../Images/collage/20.png';
import image21 from '../../Images/collage/21.png';
import image22 from '../../Images/collage/22.png';
import image23 from '../../Images/collage/23.png';
import image24 from '../../Images/collage/24.png';
import image25 from '../../Images/collage/25.png';
import image26 from '../../Images/collage/26.png';
import image27 from '../../Images/collage/27.png';
import image28 from '../../Images/collage/28.png';
import image29 from '../../Images/collage/29.png';
import image30 from '../../Images/collage/30.png';

const Collage = () => {
    // This collage is made with bootstrap grid
    return (
        <div className="collage">
            <div className="container">
                <h2 className="text-center text-white py-5">FEATURED PHOTOS</h2>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="row mb-4">
                            <img className="img-fluid" src={image1} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image3} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image2} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image13} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image14} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image15} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image25} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="row mb-4">
                            <img className="img-fluid" src={image4} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image5} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image6} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image16} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image17} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image18} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image27} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="row mb-4">
                            <img className="img-fluid" src={image7} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image8} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image9} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image19} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image28} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image20} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image21} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="row mb-4">
                            <img className="img-fluid" src={image10} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image11} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image12} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image30} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image23} alt="" />
                        </div>
                        <div className="row mb-4">
                            <img className="img-fluid" src={image4} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Collage;