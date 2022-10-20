import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const ReviewView = () => {
    const [reviews, setReviews]=useState([]);
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>console.log(data));

    },[]);
    const {reviewId}=useParams();
    return (
        <div>
            <h1>{reviewId}</h1>
        </div>
    );
};

export default ReviewView;