import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css'

const Review = (props) => {
    const { name, id, review, stars, img } = props.review;
    return (
        <div className="col-md-4 my-3">
            <Card style={{ width: '18rem', height: "300px" }} className="shadow">
                <Card.Body>
                    <div className="row align-items-center my-1">
                        <div className="col-6"><Card.Title>{name}</Card.Title></div>
                        <div className=" col-6">
                            <div className="reviewers-image">
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                        <hr />
                    <Card.Text>
                        {review}
                    </Card.Text>
                    <hr/>
                    <p>Given Rating: <b>{stars} stars</b></p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;