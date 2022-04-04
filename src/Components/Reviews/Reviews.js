import React, { useEffect, useState } from 'react';
import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = (props) => {
    let [reviews, setReviews] = useReviews([]);
    let [reviewInfo, setReviewInfo] = useState([]);

    useEffect(() => {
        if(props.onHomePage) {
            setReviewInfo(reviews.slice(0,3))
        } else {
            setReviewInfo(reviews)
        }
    }, [reviews])
    return (
        <div className="container my-5">
            <div className="row">
                {reviewInfo.map(review => <Review review={review} key={review.id}></Review>)}
            </div>
        </div>
    );
};

export default Reviews;