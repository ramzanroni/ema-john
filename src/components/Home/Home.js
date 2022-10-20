import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import iPhone from '../../iphone.png';
import useReview from '../hooks/useReview';
import Review from '../Review/Review';
import './Home.css';
const Home = () => {
    const [reviews, setReviews]=useReview();
    const selectedReview=reviews.slice(0, 3);
    return (
        <Container>
            <Row>
                <Col>
                    <Stack gap={2} className="col-md-12 mx-auto main-text">
                        <img className='iphone' src={iPhone} alt="" />
                        <h4>iPhone 14 and iPhone 14 Plus</h4>                       
                    </Stack>
                </Col>
            </Row>
            <Row className='review  main-text'>
            <h1><span> Reviews</span></h1> 
            <div className='review-item'>
            {
                selectedReview.map(review=><Review review={review} key={review.id}></Review>)
            }
            </div>

            </Row>
        </Container>
    );
};

export default Home;