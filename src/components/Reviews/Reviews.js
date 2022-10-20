import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useReview from '../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews]=useReview();
    return (
        <Container>
            <Row className='review  main-text'>
            <h1><span> Reviews</span></h1> 
                <div className='review-item'>
                    {
                        reviews.map(review=><Review review={review} key={review.id}></Review>)
                    }
                </div>
            </Row>
        </Container>
    );
};

export default Reviews;