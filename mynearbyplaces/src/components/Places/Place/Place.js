import React, { useState } from 'react';
import './Place.css';

import { Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

import api from '../../../communication/api';

const Place = ({ place, remove }) => {
    const [review, setReview] = useState('');

    const handleRemove = () => {
        remove(place);
    }

    const handleAddReview = () => {
        api.addReview(place.name, review)
        .then(() => console.log('The review was added successfully'))
        .catch(e => console.log(e));

        document.getElementById("review-input").value = '';
    }

    let onReviewChange = (e) => {
        setReview(e.target.value);
    }

    return (
        <div>
            <Container className="placeContainer">
                <Row>
                    <Col>
                        <h3 className="placeTitle">{place.name}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="placeDescription">{place.name} is a place located in {place.placelocation}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4}><Button onClick={handleRemove}>Remove</Button></Col>
                </Row>
                <Row>
                    <Col sm={12} md={9}>
                        <input className="placeReviewField" id="review-input" type="text" value={review} onChange={onReviewChange} />
                    </Col>
                    <Col sm={12} md={3}>
                        <Button onClick={handleAddReview}>Add a Review</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Place;
