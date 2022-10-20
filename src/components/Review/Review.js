import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Review = (props) => {
    const { id, picture, name, review, rating } = props.review;
    const navigate = useNavigate();
    const handelReview = () => {
        const path = `/reviews/${id}`;
        navigate(path);
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {review}
                    </Card.Text>
                    <Button variant="primary" onClick={handelReview}>Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;